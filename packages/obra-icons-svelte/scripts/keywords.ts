import { KEYWORDS_FILE, KEYWORDS_OVERRIDES_FILE, SVG_OUT_DIR } from './paths';
import { writeFile, readFile, readdir } from 'fs/promises';
import { FILE_WARNING } from './utils';
import { basename } from 'path';
import OpenAI from 'openai';
import './types.d';

console.time('generate keywords');

//? Create the OpenAI client
const openai = new OpenAI({
	apiKey: import.meta.env.SCRIPTS_OPENAI_KEY,
	timeout: 60 * 1000,
});

console.log('Finding icon names');

//? Find all the icon svg files so we can use the names
const icon_files = await readdir(SVG_OUT_DIR);

//? Normalise the names and remove the .svg extension
const icon_names = icon_files.map((name) => basename(name).slice(0, -4));

console.log('Generating keywords');

type KeywordTuple = [name: string, keywords: string[]];

//? Map the keywords icon_name:keywords
const name_keywords: KeywordTuple[] = [];

//? Try and load old keywords to prevent regenerating them
try {
	const keywords_data = await import(KEYWORDS_FILE);

	const existing_keywords: KeywordTuple[] = Object.entries(
		keywords_data.default,
	);

	console.log(`Importing ${existing_keywords.length} existing keywords`);

	for (const [name, keywords] of existing_keywords) {
		console.log(`  Importing keywords for "${name}"`);
		name_keywords.push([name, keywords]);
	}
} catch {
	console.log('Unable to find existing keywords file');
}

let i = 0;

//? Generate the keywords map in parallel
await Promise.all(
	icon_names.map(async (nameKebab) => {
		if (name_keywords.find(([name]) => name == nameKebab)) {
			console.log(`Skipping "${nameKebab}"`);
			return;
		}

		console.log(`  Generating keywords for icon "${nameKebab}"`);

		//? Ask gpt for keywords
		const completion = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo-16k',
			n: 1,
			temperature: 0,
			max_tokens: 50,

			// prettier-ignore
			messages: [
				//? The prompt
				{ role: 'system', content: 'The user will give you an icon name, please provide no more than 6 synonyms. Each synonym should be a simple plain english word, that a user might give when searching for the icon.' },

				//? Example
				{ role: 'user', content: 'clock' },
				{ role: 'assistant', content: 'time\nwatch\nalarm\nstopwatch' },

				//? Example 2
				{ role: 'user', content: 'user-add' },
				{ role: 'assistant', content: 'person\nprofile\ncustomer\naccount\nplus\ncreate' },

				//? Provide the icon without -fill
				{ role: 'user', content: nameKebab.replace(/-fill$/, '') },
			],
		});

		console.log(`  Generated keywords for icon "${nameKebab}" [${i++}]`);

		//? Parse and normalise the result
		const generated_keywords = completion.choices[0].message.content
			?.trim()
			.split('\n');

		if (!generated_keywords || !generated_keywords.length) {
			//? Handle no keywords, hopefully this doesn't happen
			throw new Error(`No keywords for ${nameKebab}`);
		}

		name_keywords.push([nameKebab, generated_keywords]);
	}),
);

//? Sort the array in place (mutates)
name_keywords.sort((a, b) =>
	a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1,
);

const overrides: Record<string, string[]> = JSON.parse(
	await readFile(KEYWORDS_OVERRIDES_FILE, 'utf-8'),
);

const keywords_object: Record<string, string[]> = {};

console.log('Mapping Keywords');

for (const [name, keywords] of name_keywords) {
	console.log(`  Processing "${name}"`);

	if (overrides[name]) {
		//? Add the keyword overrides
		keywords.unshift(...overrides[name]);
	}

	if (name.includes('-')) {
		//? Get the first part of the name. E.g. "user-add" -> "user"
		const key = name.slice(0, name.indexOf('-'));

		//? Find an entry where the name matches the key
		const found = name_keywords.find(([name]) => name == key);

		if (found) {
			console.log(`    Merging keywords from icon "${key}"`);

			//? Add the keywords from the found icon to the current one
			keywords.push(...found[1].slice(0, 3));
		}
	}

	//? Add the keywords to the object and remove duplicates using Set
	keywords_object[name] = Array.from(new Set(keywords));
}

console.log('Writing keywords');

//? Generate the keywords json object and sort them alphabetically
const keywords_json = JSON.stringify(keywords_object, null, 2);

//? The keywords ts file template
const template = `//${FILE_WARNING}
// prettier-ignore
export default ${keywords_json};
`;

//? Write the keywords
await writeFile(KEYWORDS_FILE, template, 'utf-8');

console.timeEnd('generate keywords');
