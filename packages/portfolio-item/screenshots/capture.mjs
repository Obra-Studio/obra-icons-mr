#!/usr/bin/env node
// Screenshots each finished portfolio artboard in light and dark mode using a
// headless browser — same idea as obra-lemon-admin-saas-react's
// screenshots/capture.mjs: Playwright/Chromium, one context per theme at a
// fixed viewport + device scale factor, screenshotting after the page settles.
//
// Unlike that app, this one has no auth/routing — each artboard is reached by
// deep-linking into App.svelte's own view/variant/icon/theme state via query
// params (see the URLSearchParams read at the top of App.svelte's <script>),
// and we screenshot just the fixed-size #artboard-* element rather than the
// whole viewport, so the output is exactly the artboard's pixel size × scale.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Weights shots are exported for a few representative icons, not just Home,
// so the set shows the weight range hold up across different silhouettes.
const WEIGHT_ICONS = ['Home', 'Mailbox', 'Rocket Ship'];
const WEIGHT_VARIANTS = [
	{ suffix: '', label: '', query: '' },
	{ suffix: '-thin', label: ' — Thin', query: '&weight=0' },
	{ suffix: '-medium', label: ' — Medium', query: '&weight=1' },
	{ suffix: '-bold', label: ' — Bold', query: '&weight=2' },
];

const weightItems = WEIGHT_ICONS.flatMap((icon) => {
	const iconSlug = icon.toLowerCase().replace(/\s+/g, '-');
	return WEIGHT_VARIANTS.map((variant) => ({
		slug: `weights-${iconSlug}${variant.suffix}`,
		label: `Weights — ${icon}${variant.label}`,
		query: `view=zoom&icon=${encodeURIComponent(icon)}${variant.query}`,
		selector: '#artboard-zoom',
	}));
});

const ITEMS = [
	{
		slug: 'composition-product',
		label: 'Composition — Product',
		query: 'view=composition&variant=0',
		selector: '#artboard-composition',
	},
	{
		slug: 'composition-business',
		label: 'Composition — Business',
		query: 'view=composition&variant=1',
		selector: '#artboard-composition',
	},
	{
		slug: 'composition-tech',
		label: 'Composition — Tech',
		query: 'view=composition&variant=2',
		selector: '#artboard-composition',
	},
	...weightItems,
	{
		slug: 'comparison',
		label: 'Filled vs. outline',
		query: 'view=comparison',
		selector: '#artboard-comparison',
	},
];

const THEMES = ['light', 'dark'];

function parseArgs(argv) {
	const args = {
		width: 1800,
		height: 1300,
		scale: 2,
		out: path.join(ROOT, 'out', 'screenshots'),
		items: ITEMS.map((i) => i.slug),
		themes: THEMES,
	};
	for (const arg of argv) {
		const [key, value] = arg.replace(/^--/, '').split('=');
		if (key === 'width') args.width = Number(value);
		else if (key === 'height') args.height = Number(value);
		else if (key === 'scale') args.scale = Number(value);
		else if (key === 'out') args.out = path.resolve(value);
		else if (key === 'items') args.items = value.split(',');
		else if (key === 'themes') args.themes = value.split(',');
	}
	return args;
}

function spawnDevServer() {
	return new Promise((resolve, reject) => {
		const proc = spawn('pnpm', ['dev'], {
			cwd: ROOT,
			stdio: ['ignore', 'pipe', 'pipe'],
		});
		let log = '';
		let settled = false;

		const onData = (chunk) => {
			log += chunk.toString();
		};
		proc.stdout.on('data', onData);
		proc.stderr.on('data', onData);

		const poll = setInterval(() => {
			const match = log.match(/Local:\s+(https?:\/\/\S+)/);
			if (match && !settled) {
				settled = true;
				clearInterval(poll);
				clearTimeout(timer);
				resolve({ proc, baseUrl: match[1].replace(/\/$/, '') });
			}
		}, 100);

		const timer = setTimeout(() => {
			if (!settled) {
				settled = true;
				clearInterval(poll);
				proc.kill();
				reject(
					new Error(
						`Timed out waiting for dev server to start.\n--- server output ---\n${log}`,
					),
				);
			}
		}, 20_000);

		proc.on('exit', (code) => {
			if (!settled) {
				settled = true;
				clearInterval(poll);
				clearTimeout(timer);
				reject(
					new Error(
						`dev server exited early (code ${code}).\n--- server output ---\n${log}`,
					),
				);
			}
		});
	});
}

function stopDevServer(proc) {
	return new Promise((resolve) => {
		proc.once('exit', resolve);
		proc.kill();
		setTimeout(resolve, 5000);
	});
}

async function shootTheme(
	browser,
	{ baseUrl, theme, width, height, scale, out, items },
) {
	const context = await browser.newContext({
		viewport: { width, height },
		deviceScaleFactor: scale,
	});

	for (const item of items) {
		const page = await context.newPage();
		console.log(`  shooting ${item.label} (${theme})`);
		await page.goto(`${baseUrl}/?${item.query}&theme=${theme}`, {
			waitUntil: 'load',
		});
		await page.waitForLoadState('networkidle');
		await page.waitForTimeout(300); // let fonts/layout settle
		const dir = path.join(out, item.slug);
		await mkdir(dir, { recursive: true });
		await page
			.locator(item.selector)
			.screenshot({ path: path.join(dir, `${theme}.png`) });
		await page.close();
	}

	await context.close();
}

async function main() {
	const args = parseArgs(process.argv.slice(2));
	const items = ITEMS.filter((i) => args.items.includes(i.slug));

	console.log('Starting dev server...');
	const { proc, baseUrl } = await spawnDevServer();
	console.log(`Dev server ready at ${baseUrl}`);

	const browser = await chromium.launch();
	try {
		for (const theme of args.themes) {
			await shootTheme(browser, {
				baseUrl,
				theme,
				width: args.width,
				height: args.height,
				scale: args.scale,
				out: args.out,
				items,
			});
		}
	} finally {
		await browser.close();
		await stopDevServer(proc);
	}

	console.log(`\ndone → ${path.relative(ROOT, args.out)}/`);
}

main().catch((err) => {
	console.error(err);
	process.exitCode = 1;
});
