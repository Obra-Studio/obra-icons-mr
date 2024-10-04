<script lang="ts">
	import { onMount } from 'svelte';

	import { iconNamePascal } from './utilities';
	import { colorStore } from './store';
	import * as Icons from 'obra-icons-svelte';

	import { create, insert, search } from '@orama/orama';

	import iconSearchData from 'obra-icons-website/src/lib/keywords';
	import ColorPicker from './ColorPicker.svelte';

	function saveColorToClientStorage(color: string) {
		parent.postMessage(
			{
				pluginMessage: {
					type: 'save-icon-color',
					color: color,
				},
				pluginId: '*',
			},
			'*',
		);
	}

	let searchDb: any;
	let filteredIcons: { name: string; component: any }[] = [];

	// Icons used in the UI
	import {
		IconSearch,
		IconStrokeWidth,
		IconCircleClose,
	} from 'obra-icons-svelte';

	let searchTerm = '';

	let isDarkMode: boolean;

	$: {
		if (typeof window !== 'undefined') {
			isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
				isDarkMode = e.matches;
			});
		}
	}

	// Defaults
	let iconProperties = {
		size: {
			value: 24,
			min: 12,
			max: 64,
			step: 4,
		},
		strokeWeight: {
			value: 1.5,
			min: 1,
			max: 2,
			step: 0.5,
		},
		color: {
			value: '#000000',
		},
	};

	let color;
	colorStore.subscribe(value => {
		color = value;
	});

	let iconType: 'all' | 'stroke' | 'fill' = 'all';

	function loadSavedSettings() {
		parent.postMessage(
			{
				pluginMessage: { type: 'load-settings' },
				pluginId: '*',
			},
			'*',
		);
	}

	const iconList = Object.entries(Icons)
		.filter(([name]) => name.startsWith('Icon'))
		.map(([name, component]) => ({ name, component }));


	async function initializeSearchDb() {
		searchDb = await create({
			schema: {
				nameKebab: 'string',
				namePascal: 'string',
				keywords: 'string[]',
			},
		});

		const entries = Object.entries(iconSearchData);

		for (const [nameKebab, keywords] of entries) {
			await insert(searchDb, {
				namePascal: iconNamePascal(nameKebab),
				nameKebab,
				keywords,
			});
		}

		// Initial search to populate filteredIcons with shuffled results
		filteredIcons = await performSearch('');
	}


	onMount(async () => {
		await initializeSearchDb();
		loadSavedSettings();
	});

	async function performSearch(term: string) {
		if (!searchDb) return iconList;  // Return all icons if searchDb is not ready

		const results = await search(searchDb, {
			term,
			properties: ['nameKebab', 'keywords'],
			limit: 2000,
			boost: {
				keywords: 2,
			},
		});

		return results.hits
			.map((hit) => ({
				name: hit.document.namePascal,
				component: Icons[hit.document.namePascal],
			}))
			.filter((icon) => {
				const isFilledIcon = icon.name.endsWith('Fill');
				switch (iconType) {
					case 'stroke':
						return !isFilledIcon;
					case 'fill':
						return isFilledIcon;
					default:
						return true;
				}
			});
	}

	$: searchIcons = async () => {
		const results = await performSearch(searchTerm);
		filteredIcons = searchTerm ? results : shuffleArray(results);
	};

	$: {
		searchIcons();
	}

	function handleIconClick(name: string, component: any) {
		const tempDiv = document.createElement('div');
		const isFillIcon = name.endsWith('Fill');

		new component({
			target: tempDiv,
			props: {
				size: iconProperties.size.value,
				color: $colorStore,
				...(isFillIcon
					? {}
					: { strokeWidth: iconProperties.strokeWeight.value }),
			},
		});

		const svgString = tempDiv.innerHTML;

		const formattedName = name
			.slice(4)
			.split(/(?=[A-Z])/)
			.map((word) => word.toLowerCase())
			.join(' ')
			.trim();

		parent.postMessage(
			{
				pluginMessage: {
					type: 'paste-icon',
					iconName: formattedName,
					svgString,
					strokeWeight: isFillIcon
						? undefined
						: iconProperties.strokeWeight.value,
					iconSize: iconProperties.size.value,
					iconColor: $colorStore,
				},
				pluginId: '*',
			},
			'*',
		);
	}

	// Listen for messages from the plugin
	$: window.onmessage = (event) => {
		if (event.data.pluginMessage) {
			const { type, size, strokeWeight, color } = event.data.pluginMessage;
			if (type === 'load-settings-result') {
				if (size !== undefined) {
					iconProperties.size.value = size;
				}
				if (strokeWeight !== undefined) {
					iconProperties.strokeWeight.value = strokeWeight;
				}
				if (color !== undefined) {
					iconProperties.color.value = color;
					previousColor = color;
				}
			}
		}
	};

	$: searchIcons = async () => {
		const results = await performSearch(searchTerm);
		filteredIcons = searchTerm ? results : shuffleArray(results);
	};

	let previousColor = '#000000';
	let isIconColorInvisible = false;

	$: {
		if (iconType) {
			searchIcons();
		}

		if (iconProperties.size) {
			parent.postMessage(
				{
					pluginMessage: {
						type: 'save-icon-size',
						size: iconProperties.size.value,
					},
					pluginId: '*',
				},
				'*',
			);
		}

		if (iconProperties.color.value && iconProperties.color.value !== previousColor) {
			previousColor = iconProperties.color.value;
			saveColorToClientStorage(iconProperties.color.value);
		}

		// Check if the icon color might be invisible
		isIconColorInvisible = (isDarkMode && $colorStore === '#000000') ||
			(!isDarkMode && iconProperties.color.value === '#ffffff');
	}

	async function setStrokeWeight(weight: number) {
		iconProperties.strokeWeight.value = weight;
		parent.postMessage(
			{
				pluginMessage: { type: 'save-stroke-weight', weight },
				pluginId: '*',
			},
			'*',
		);
	}

	// Dragging control related

	let draggingControl: 'size' | 'stroke' | null = null;
	let isDragging = false;
	let startX = 0;

	function onMouseDown(event: MouseEvent, control: 'size' | 'stroke') {
		isDragging = true;
		draggingControl = control;
		startX = event.clientX;
		event.preventDefault();
	}

	function onMouseMove(event: MouseEvent) {
		if (isDragging) {
			const deltaX = event.clientX - startX;
			if (draggingControl === 'size') {
				iconProperties.size.value += Math.round(deltaX);
				iconProperties.size.value =
					Math.round(
						iconProperties.size.value / iconProperties.size.step,
					) * iconProperties.size.step; // Round to nearest step
				iconProperties.size.value = Math.min(
					Math.max(
						iconProperties.size.value,
						iconProperties.size.min,
					),
					iconProperties.size.max,
				);
			}
			startX = event.clientX;
		}
	}

	function onMouseUp() {
		isDragging = false;
		draggingControl = null;
	}
</script>

<div class="controls">

	<div class="control-group">
		<label for="iconColor">Color</label>
		<div class="color-control">
			<ColorPicker />
		</div>
	</div>

	<div class="control-group">
		<label for="iconSize">Size</label>
		<input
			bind:value={iconProperties.size.value}
			id="iconSize"
			max={iconProperties.size.max}
			min={iconProperties.size.min}
			step={iconProperties.size.step}
			type="range"
		/>
		<span
			on:mousedown={(event) => onMouseDown(event, 'size')}
			on:mousemove={onMouseMove}
			on:mouseup={onMouseUp}
			style="cursor: ew-resize;"
		>
            {iconProperties.size.value}px
        </span>
	</div>

	<!-- <div class="control-group">
		<div aria-describedby="iconType" class="fieldset" role="group">
			<div class="legend" id="iconType">
				Icon type
			</div>
			<div class="radio-buttons">
				<label>
					<input bind:group={iconType} name="iconType" type="radio" value="all">
					<span>All</span>
				</label>
				<label>
					<input bind:group={iconType} name="iconType" type="radio" value="stroke">
					<span>Stroke</span>
				</label>
				<label>
					<input bind:group={iconType} name="iconType" type="radio" value="fill">
					<span>Fill</span>
				</label>
			</div>
		</div>
	</div> -->

	<div class="control-group">
		<div aria-describedby="iconStrokeWeight" class="fieldset" role="group">
			<div class="legend" id="iconStrokeWeight">
				<IconStrokeWidth size={16} />
				<!-- <span>Stroke weight</span> -->
			</div>
			<div class="radio-buttons">
				<label>
					<input bind:group={iconProperties.strokeWeight.value} name="strokeWeight"
						   on:change={() => setStrokeWeight(1)} type="radio"
						   value={1}>
					<span>1</span>
				</label>
				<label>
					<input bind:group={iconProperties.strokeWeight.value} name="strokeWeight"
						   on:change={() => setStrokeWeight(1.5)} type="radio"
						   value={1.5}>
					<span>1.5</span>
				</label>
				<label>
					<input bind:group={iconProperties.strokeWeight.value} name="strokeWeight"
						   on:change={() => setStrokeWeight(2)} type="radio"
						   value={2}>
					<span>2</span>
				</label>
			</div>
		</div>
	</div>

</div>

<div class="search-holder">
	<IconSearch size={16} />
	<input
		bind:value={searchTerm}
		placeholder="Enter your search term&hellip;"
		type="text"
	/>
	{#if searchTerm}
		<button class="clear-search" on:click={() => (searchTerm = '')}>
			<IconCircleClose size={16} />
			<span class="accessible-text">Clear search</span>
		</button>
	{/if}
</div>

{#if isIconColorInvisible}
	<div class="warning-message">
		Warning: The current icon color may not be visible in the current color scheme. Please hover below.
	</div>
{/if}

<div class="icon-grid">
	{#if filteredIcons.length > 0}
		{#each filteredIcons as { name, component }}
			{#if name && component}
				<button
					class="icon-item"
					on:click={() => handleIconClick(name, component)}
				>
					{#if !name.endsWith('Fill')}
						<svelte:component
							this={component}
							size={iconProperties.size.value}
							color={$colorStore}
							strokeWidth={iconProperties.strokeWeight.value}
						/>
					{:else}
						<svelte:component
							this={component}
							size={iconProperties.size.value}
							color={$colorStore}
						/>
					{/if}
				</button>
			{/if}
		{/each}
	{:else}
		<p class="no-results">No icons found matching "{searchTerm}"</p>
	{/if}
</div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />
