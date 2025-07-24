// Suppress React warnings about SVG attributes from Obra Icons package
// These are harmless warnings about kebab-case vs camelCase attributes
const originalConsoleError = console.error;
console.error = (...args) => {
	if (
		typeof args[0] === 'string' &&
		(args[0].includes('Invalid DOM property') ||
			args[0].includes('Did you mean'))
	) {
		return;
	}
	originalConsoleError.apply(console, args);
};

import { Draggable, framer, useIsAllowedTo } from 'framer-plugin';
import Fuse from 'fuse.js';
import {
	Suspense,
	useCallback,
	useDeferredValue,
	useMemo,
	useState,
} from 'react';
import './App.css';

import * as Icons from 'obra-icons-react';
import iconSearchData from 'obra-icons-website/src/lib/keywords';
import { renderToStaticMarkup } from 'react-dom/server';

interface IconEntry {
	name: string; // "academic-cap"
	pascal_name: string; // "IconAcademicCap"
	Icon: React.ComponentType<any>;
	keywords: string[];
	type: 'stroke' | 'fill'; // Add icon type
}

type StrokeWidthOption = { key: string; value: number };

const strokeWidthOptions: StrokeWidthOption[] = [
	{
		key: 'Thin (1px)',
		value: 1,
	},
	{
		key: 'Regular (1.5px)',
		value: 1.5,
	},
	{
		key: 'Bold (2px)',
		value: 2,
	},
];

type IconTypeOption = { key: string; value: 'all' | 'stroke' | 'fill' };

const iconTypeOptions: IconTypeOption[] = [
	{
		key: 'All',
		value: 'all',
	},
	{
		key: 'Stroke',
		value: 'stroke',
	},
	{
		key: 'Fill',
		value: 'fill',
	},
];

// Create icon data from the Obra icons
const icons: ReadonlyArray<IconEntry> = Object.entries(Icons)
	.filter(([name]) => name.startsWith('Icon'))
	.map(([name, Icon]) => {
		// Convert PascalCase to kebab-case for the name
		const kebabName = name
			.replace(/^Icon/, '')
			.replace(/([A-Z])/g, '-$1')
			.toLowerCase()
			.replace(/^-/, '');

		// Determine icon type based on name
		const type = name.endsWith('Fill') ? 'fill' : 'stroke';

		return {
			name: kebabName,
			pascal_name: name,
			Icon: Icon as React.ComponentType<any>,
			keywords:
				(iconSearchData as Record<string, string[]>)[kebabName] || [],
			type,
		};
	});

function IconGrid(props: {
	searchQuery: string;
	strokeWidth: number;
	iconType: 'all' | 'stroke' | 'fill';
}) {
	const { searchQuery, strokeWidth, iconType } = props;

	const isAllowedToAddSVG = useIsAllowedTo('addSVG');

	const deferredQuery = useDeferredValue(searchQuery);

	const filteredIcons = useMemo(() => {
		// Filter by icon type first
		let filtered = icons;
		if (iconType !== 'all') {
			filtered = filtered.filter((icon) => icon.type === iconType);
		}

		// Then filter by search query
		const query = deferredQuery.trim().toLowerCase();
		if (!query) return filtered;

		// Create a new Fuse instance with the type-filtered icons
		const typeFilteredFuse = new Fuse(filtered, {
			keys: [
				{ name: 'name', weight: 4 },
				{ name: 'pascal_name', weight: 4 },
				'keywords',
			],
			threshold: 0.2,
			useExtendedSearch: true,
		});

		return typeFilteredFuse.search(query).map((value) => value.item);
	}, [deferredQuery, iconType]);

	const handleIconClick = useCallback(
		async (entry: IconEntry) => {
			const { Icon } = entry;

			const svg = renderToStaticMarkup(
				<Icon size={32} color={'black'} strokeWidth={strokeWidth} />,
			);

			await framer.addSVG({
				svg,
				name: 'Icon',
			});
		},
		[strokeWidth],
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
								: 'Insufficient permissions'
						}
					>
						<Draggable
							data={() => ({
								type: 'svg',
								name: 'Icon',
								svg: renderToStaticMarkup(
									<Icon
										size={32}
										color={'var(--framer-color-text)'}
										strokeWidth={strokeWidth}
									/>,
								),
							})}
						>
							<Icon
								size={32}
								color={'var(--framer-color-text)'}
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
	const [searchQuery, setSearchQuery] = useState('');
	const [iconType, setIconType] = useState<'all' | 'stroke' | 'fill'>('all');

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
				<div className="dropdowns-container">
					<select
						className="type-selector"
						value={iconType}
						onChange={(e) => {
							setIconType(
								e.target.value as 'all' | 'stroke' | 'fill',
							);
						}}
					>
						{iconTypeOptions.map((option) => (
							<option key={option.key} value={option.value}>
								{option.key}
							</option>
						))}
					</select>
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
			</div>

			<div className="grid-container">
				<Suspense fallback={null}>
					<IconGrid
						searchQuery={searchQuery}
						strokeWidth={strokeWidth}
						iconType={iconType}
					/>
				</Suspense>
			</div>
		</>
	);
}
