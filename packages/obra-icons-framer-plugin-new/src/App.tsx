// Suppress React warnings about SVG attributes from Obra Icons package
// These are harmless warnings about kebab-case vs camelCase attributes
const originalConsoleError = console.error;
console.error = (...args) => {
	if (
		typeof args[0] === "string" &&
		(args[0].includes("Invalid DOM property") ||
			args[0].includes("Did you mean"))
	) {
		return;
	}
	originalConsoleError.apply(console, args);
};

import { Draggable, framer, useIsAllowedTo } from "framer-plugin";
import Fuse from "fuse.js";
import {
	Suspense,
	useCallback,
	useDeferredValue,
	useMemo,
	useState,
} from "react";
import "./App.css";

import * as Icons from "obra-icons-react";
import { renderToStaticMarkup } from "react-dom/server";

interface IconEntry {
	name: string; // "academic-cap"
	pascal_name: string; // "IconAcademicCap"
	Icon: React.ComponentType<any>;
	keywords: string[];
}

type StrokeWidthOption = { key: string; value: number };

const strokeWidthOptions: StrokeWidthOption[] = [
	{
		key: "Thin",
		value: 1,
	},
	{
		key: "Regular",
		value: 1.5,
	},
	{
		key: "Bold",
		value: 2,
	},
];

// Simplified keywords mapping for common icons
const iconKeywords: Record<string, string[]> = {
	add: ["plus", "more", "create", "insert", "include", "append", "attach"],
	search: ["find", "lookup", "magnifying", "glass", "discover"],
	home: ["house", "main", "start", "dashboard", "index"],
	user: ["person", "profile", "account", "avatar", "human"],
	settings: ["gear", "configuration", "preferences", "options", "setup"],
	heart: ["love", "favorite", "like", "emotion", "affection"],
	star: ["favorite", "rating", "bookmark", "highlight", "important"],
	download: ["save", "export", "get", "receive", "fetch"],
	upload: ["send", "import", "share", "submit", "transfer"],
	edit: ["modify", "change", "update", "alter", "pencil"],
	delete: ["remove", "trash", "bin", "clear", "erase"],
	close: ["exit", "cancel", "dismiss", "x", "cross"],
	check: ["confirm", "done", "success", "tick", "mark"],
	calendar: ["date", "schedule", "event", "time", "appointment"],
	email: ["mail", "message", "inbox", "correspondence", "letter"],
	phone: ["call", "telephone", "contact", "communication", "mobile"],
	camera: ["photo", "picture", "image", "capture", "shoot"],
	video: ["movie", "play", "media", "recording", "film"],
	music: ["audio", "sound", "play", "melody", "song"],
	file: ["document", "paper", "folder", "storage", "data"],
	link: ["url", "connect", "reference", "hyperlink", "web"],
	share: ["social", "distribute", "send", "broadcast", "post"],
	lock: ["security", "private", "protected", "safe", "secure"],
	unlock: ["open", "access", "available", "free", "release"],
	eye: ["view", "see", "watch", "observe", "look"],
	"eye-off": ["hide", "conceal", "blind", "invisible", "secret"],
	sun: ["light", "day", "bright", "warm", "weather"],
	moon: ["night", "dark", "sleep", "evening", "lunar"],
	cloud: ["weather", "sky", "atmosphere", "overcast", "rain"],
	wifi: ["wireless", "internet", "connection", "network", "signal"],
	battery: ["power", "energy", "charge", "level", "status"],
	location: ["place", "map", "pin", "where", "position"],
	time: ["clock", "hour", "minute", "schedule", "duration"],
	notification: ["alert", "bell", "message", "reminder", "announcement"],
	menu: ["hamburger", "navigation", "list", "options", "more"],
	grid: ["layout", "table", "matrix", "array", "organized"],
	list: ["items", "rows", "lines", "ordered", "sequence"],
	filter: ["sort", "refine", "sieve", "separate", "organize"],
	sort: ["order", "arrange", "organize", "classify", "rank"],
	refresh: ["reload", "update", "sync", "renew", "restart"],
	save: ["store", "keep", "preserve", "retain", "backup"],
	print: ["output", "paper", "hardcopy", "document", "printer"],
	copy: ["duplicate", "clone", "replicate", "reproduce", "paste"],
	cut: ["remove", "extract", "separate", "divide", "slice"],
	paste: ["insert", "add", "place", "apply", "stick"],
	undo: ["reverse", "back", "cancel", "revert", "previous"],
	redo: ["forward", "repeat", "again", "restore", "next"],
	"zoom-in": ["magnify", "enlarge", "expand", "bigger", "increase"],
	"zoom-out": ["reduce", "shrink", "smaller", "decrease", "minimize"],
	fullscreen: ["expand", "maximize", "full", "screen", "view"],
	minimize: ["reduce", "shrink", "small", "collapse", "hide"],
	maximize: ["expand", "full", "large", "big", "enlarge"],
	rotate: ["turn", "spin", "twist", "revolve", "pivot"],
	flip: ["mirror", "reverse", "turn", "invert", "reflect"],
	crop: ["cut", "trim", "resize", "adjust", "frame"],
	paint: ["brush", "color", "draw", "art", "fill"],
	text: ["type", "write", "font", "letter", "word"],
	bold: ["thick", "strong", "heavy", "weight", "emphasis"],
	italic: ["slanted", "tilted", "oblique", "style", "emphasis"],
	underline: ["line", "mark", "emphasize", "highlight", "stress"],
	code: ["programming", "script", "development", "syntax", "language"],
	image: ["picture", "photo", "graphic", "visual", "media"],
	audio: ["sound", "music", "noise", "volume", "speaker"],
	table: ["grid", "data", "rows", "columns", "spreadsheet"],
	chart: ["graph", "data", "visualization", "statistics", "analytics"],
	pie: ["chart", "circle", "portion", "segment", "percentage"],
	bar: ["chart", "graph", "column", "data", "statistics"],
	line: ["chart", "graph", "trend", "data", "statistics"],
	area: ["chart", "graph", "fill", "data", "statistics"],
	scatter: ["chart", "graph", "points", "data", "statistics"],
	heatmap: ["chart", "graph", "color", "data", "statistics"],
	gauge: ["meter", "dial", "measure", "indicator", "progress"],
	progress: ["bar", "meter", "indicator", "status", "completion"],
	loading: ["spinner", "wait", "process", "busy", "working"],
	error: ["warning", "alert", "problem", "issue", "fail"],
	success: ["check", "done", "complete", "good", "positive"],
	info: ["information", "help", "details", "data", "knowledge"],
	warning: ["alert", "caution", "danger", "attention", "notice"],
	question: ["help", "support", "ask", "inquiry", "doubt"],
	plus: ["add", "more", "create", "insert", "include"],
	minus: ["subtract", "remove", "less", "decrease", "reduce"],
	times: ["multiply", "close", "cancel", "x", "cross"],
	divide: ["split", "separate", "share", "partition", "section"],
	equals: ["equal", "same", "match", "equivalent", "balance"],
	percent: ["percentage", "rate", "ratio", "portion", "fraction"],
	dollar: ["money", "currency", "cash", "price", "cost"],
	euro: ["money", "currency", "cash", "price", "cost"],
	pound: ["money", "currency", "cash", "price", "cost"],
	yen: ["money", "currency", "cash", "price", "cost"],
	bitcoin: ["crypto", "currency", "money", "digital", "coin"],
	ethereum: ["crypto", "currency", "money", "digital", "coin"],
	"credit-card": ["payment", "money", "card", "bank", "finance"],
	wallet: ["money", "payment", "card", "bank", "finance"],
	bank: ["money", "finance", "account", "institution", "credit"],
	"piggy-bank": ["money", "savings", "bank", "finance", "store"],
	receipt: ["bill", "invoice", "payment", "money", "document"],
	invoice: ["bill", "receipt", "payment", "money", "document"],
	tax: ["money", "government", "payment", "finance", "duty"],
	insurance: ["protection", "coverage", "policy", "security", "safety"],
	investment: ["money", "finance", "growth", "profit", "capital"],
	loan: ["money", "finance", "credit", "debt", "borrow"],
	mortgage: ["money", "finance", "loan", "house", "property"],
	rent: ["money", "payment", "lease", "property", "housing"],
	salary: ["money", "income", "wage", "payment", "earnings"],
	bonus: ["money", "reward", "extra", "payment", "incentive"],
	commission: ["money", "payment", "fee", "percentage", "earnings"],
	tip: ["money", "payment", "gratuity", "service", "reward"],
	donation: ["money", "charity", "gift", "contribution", "support"],
	refund: ["money", "return", "payment", "reimbursement", "back"],
	discount: ["money", "sale", "reduction", "offer", "deal"],
	coupon: ["money", "discount", "offer", "sale", "deal"],
	gift: ["present", "donation", "charity", "birthday", "celebration"],
	"shopping-cart": ["buy", "purchase", "shop", "store", "commerce"],
	bag: ["shopping", "carry", "container", "store", "purchase"],
	basket: ["shopping", "carry", "container", "store", "purchase"],
	box: ["container", "package", "storage", "shipping", "delivery"],
	package: ["box", "container", "shipping", "delivery", "mail"],
	shipping: ["delivery", "transport", "mail", "package", "box"],
	truck: ["delivery", "transport", "shipping", "vehicle", "cargo"],
	plane: ["travel", "transport", "flight", "air", "airplane"],
	train: ["travel", "transport", "rail", "railway", "commute"],
	bus: ["travel", "transport", "public", "commute", "vehicle"],
	car: ["travel", "transport", "vehicle", "automobile", "drive"],
	bike: ["travel", "transport", "bicycle", "cycle", "ride"],
	walk: ["travel", "transport", "pedestrian", "foot", "step"],
	run: ["travel", "transport", "exercise", "fitness", "sport"],
	swim: ["travel", "transport", "exercise", "fitness", "sport"],
	gym: ["exercise", "fitness", "workout", "training", "sport"],
	yoga: ["exercise", "fitness", "meditation", "wellness", "health"],
	meditation: ["mindfulness", "relaxation", "wellness", "health", "peace"],
	sleep: ["rest", "bed", "night", "dream", "recovery"],
	pill: ["medicine", "health", "drug", "treatment", "medical"],
	thermometer: ["temperature", "health", "fever", "measure", "hot"],
	stethoscope: ["medical", "health", "doctor", "heartbeat", "examination"],
	syringe: ["medical", "health", "injection", "vaccine", "treatment"],
	bandage: ["medical", "health", "wound", "injury", "healing"],
	crutch: ["medical", "health", "support", "injury", "disability"],
	wheelchair: [
		"medical",
		"health",
		"disability",
		"mobility",
		"accessibility",
	],
	hospital: ["medical", "health", "care", "treatment", "facility"],
	clinic: ["medical", "health", "care", "treatment", "facility"],
	pharmacy: ["medical", "health", "medicine", "drug", "prescription"],
	laboratory: ["medical", "health", "research", "test", "science"],
	microscope: ["medical", "health", "research", "science", "magnification"],
	dna: ["medical", "health", "science", "genetics", "biology"],
	virus: ["medical", "health", "disease", "infection", "pathogen"],
	bacteria: ["medical", "health", "microorganism", "infection", "science"],
	cell: ["medical", "health", "biology", "science", "microscopic"],
	organ: ["medical", "health", "body", "anatomy", "biology"],
	bone: ["medical", "health", "skeleton", "anatomy", "body"],
	muscle: ["medical", "health", "fitness", "anatomy", "body"],
	brain: ["medical", "health", "mind", "anatomy", "intelligence"],
	lung: ["medical", "health", "breathing", "anatomy", "respiratory"],
	stomach: ["medical", "health", "digestion", "anatomy", "body"],
	liver: ["medical", "health", "organ", "anatomy", "body"],
	kidney: ["medical", "health", "organ", "anatomy", "body"],
	ear: ["medical", "health", "hearing", "anatomy", "sound"],
	nose: ["medical", "health", "smell", "anatomy", "breathing"],
	mouth: ["medical", "health", "speech", "anatomy", "eating"],
	tooth: ["medical", "health", "dental", "anatomy", "mouth"],
	tongue: ["medical", "health", "taste", "anatomy", "mouth"],
	hair: ["medical", "health", "beauty", "anatomy", "body"],
	nail: ["medical", "health", "beauty", "anatomy", "body"],
	skin: ["medical", "health", "beauty", "anatomy", "body"],
	blood: ["medical", "health", "circulation", "anatomy", "body"],
	baby: ["medical", "health", "child", "infant", "newborn"],
	child: ["medical", "health", "kid", "young", "minor"],
	adult: ["medical", "health", "grown", "mature", "person"],
	elderly: ["medical", "health", "senior", "old", "aged"],
	parent: ["medical", "health", "family", "guardian", "caregiver"],
	mother: ["medical", "health", "mom", "parent", "female"],
	father: ["medical", "health", "dad", "parent", "male"],
	sister: ["medical", "health", "sibling", "family", "female"],
	brother: ["medical", "health", "sibling", "family", "male"],
	friend: ["medical", "health", "companion", "buddy", "pal"],
	colleague: ["medical", "health", "coworker", "work", "professional"],
	boss: ["medical", "health", "manager", "supervisor", "leader"],
	employee: ["medical", "health", "worker", "staff", "professional"],
	manager: ["medical", "health", "supervisor", "leader", "boss"],
	executive: ["medical", "health", "leader", "management", "business"],
	ceo: ["medical", "health", "executive", "leader", "business"],
	president: ["medical", "health", "leader", "executive", "business"],
	team: ["medical", "health", "group", "collaboration", "work"],
	company: ["medical", "health", "business", "organization", "enterprise"],
	corporation: ["medical", "health", "business", "company", "enterprise"],
	business: ["medical", "health", "company", "enterprise", "organization"],
	startup: ["medical", "health", "business", "company", "new"],
	office: ["medical", "health", "workplace", "business", "professional"],
	workspace: ["medical", "health", "office", "work", "environment"],
	desk: ["medical", "health", "furniture", "work", "office"],
	chair: ["medical", "health", "furniture", "seat", "sitting"],
	"table-furniture": ["medical", "health", "furniture", "surface", "work"],
	storage: ["medical", "health", "warehouse", "facility", "space"],
	warehouse: ["medical", "health", "storage", "facility", "industrial"],
	factory: ["medical", "health", "industrial", "manufacturing", "production"],
	plant: ["medical", "health", "factory", "industrial", "manufacturing"],
	"power-plant": ["medical", "health", "energy", "electricity", "industrial"],
	nuclear: ["medical", "health", "energy", "power", "industrial"],
	solar: ["medical", "health", "energy", "renewable", "power"],
	wind: ["medical", "health", "energy", "renewable", "power"],
	hydro: ["medical", "health", "energy", "water", "renewable"],
	geothermal: ["medical", "health", "energy", "renewable", "power"],
	biomass: ["medical", "health", "energy", "renewable", "organic"],
	coal: ["medical", "health", "energy", "fossil", "fuel"],
	oil: ["medical", "health", "energy", "fossil", "fuel"],
	gas: ["medical", "health", "energy", "fossil", "fuel"],
	petroleum: ["medical", "health", "energy", "fossil", "fuel"],
	diesel: ["medical", "health", "fuel", "energy", "transport"],
	gasoline: ["medical", "health", "fuel", "energy", "transport"],
	ethanol: ["medical", "health", "fuel", "renewable", "energy"],
	biodiesel: ["medical", "health", "fuel", "renewable", "energy"],
	hydrogen: ["medical", "health", "fuel", "renewable", "energy"],
	methane: ["medical", "health", "fuel", "gas", "energy"],
	propane: ["medical", "health", "fuel", "gas", "energy"],
	butane: ["medical", "health", "fuel", "gas", "energy"],
	lpg: ["medical", "health", "fuel", "gas", "energy"],
	cng: ["medical", "health", "fuel", "gas", "energy"],
	lng: ["medical", "health", "fuel", "gas", "energy"],
};

// Create icon data from the Obra icons
const icons: ReadonlyArray<IconEntry> = Object.entries(Icons)
	.filter(([name]) => name.startsWith("Icon"))
	.map(([name, Icon]) => {
		// Convert PascalCase to kebab-case for the name
		const kebabName = name
			.replace(/^Icon/, "")
			.replace(/([A-Z])/g, "-$1")
			.toLowerCase()
			.replace(/^-/, "");

		return {
			name: kebabName,
			pascal_name: name,
			Icon: Icon as React.ComponentType<any>,
			keywords: iconKeywords[kebabName] || [],
		};
	});

const fuse = new Fuse(icons, {
	keys: [
		{ name: "name", weight: 4 },
		{ name: "pascal_name", weight: 4 },
		"keywords",
	],
	threshold: 0.2,
	useExtendedSearch: true,
});

function IconGrid(props: { searchQuery: string; strokeWidth: number }) {
	const { searchQuery, strokeWidth } = props;

	const isAllowedToAddSVG = useIsAllowedTo("addSVG");

	const deferredQuery = useDeferredValue(searchQuery);

	const filteredIcons = useMemo(() => {
		const query = deferredQuery.trim().toLowerCase();
		if (!query) return icons;

		return fuse.search(query).map((value) => value.item);
	}, [deferredQuery]);

	const handleIconClick = useCallback(
		async (entry: IconEntry) => {
			const { Icon } = entry;

			const svg = renderToStaticMarkup(
				<Icon size={32} color={"black"} strokeWidth={strokeWidth} />
			);

			await framer.addSVG({
				svg,
				name: "Icon",
			});
		},
		[strokeWidth]
	);

	if (filteredIcons.length === 0) {
		return (
			<div className="error-container">
				<p>No Results</p>
			</div>
		);
	}

	return (
		<div className="grid">
			{filteredIcons.map((entry: IconEntry) => {
				const { Icon } = entry;

				return (
					<button
						key={entry.name}
						className="icon-parent"
						onClick={() => {
							if (!isAllowedToAddSVG) return;
							handleIconClick(entry);
						}}
						disabled={!isAllowedToAddSVG}
						title={
							isAllowedToAddSVG
								? undefined
								: "Insufficient permissions"
						}
					>
						<Draggable
							data={() => ({
								type: "svg",
								name: "Icon",
								svg: renderToStaticMarkup(
									<Icon
										size={32}
										color={"var(--framer-color-text)"}
										strokeWidth={strokeWidth}
									/>
								),
							})}
						>
							<Icon
								size={32}
								color={"var(--framer-color-text)"}
								strokeWidth={strokeWidth}
							/>
						</Draggable>
					</button>
				);
			})}
		</div>
	);
}

export function App() {
	const [strokeWidth, setStrokeWidth] = useState<number>(1.5);
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<>
			<div className="search-container">
				<input
					autoComplete="nope"
					autoCorrect="off"
					autoFocus
					className="search-input"
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Search…"
				/>
				<select
					className="weight-selector"
					value={strokeWidth}
					onChange={(e) => {
						setStrokeWidth(Number(e.target.value));
					}}
				>
					{strokeWidthOptions.map((option) => (
						<option key={option.key} value={option.value}>
							{option.key}
						</option>
					))}
				</select>
			</div>

			<div className="grid-container">
				<Suspense fallback={null}>
					<IconGrid
						searchQuery={searchQuery}
						strokeWidth={strokeWidth}
					/>
				</Suspense>
			</div>
		</>
	);
}
