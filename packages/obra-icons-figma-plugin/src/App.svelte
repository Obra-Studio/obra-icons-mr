<script lang="ts">
	import { onMount } from 'svelte';

	import * as Icons from 'obra-icons-svelte';

	import { create, insert, search } from '@orama/orama';

	import iconSearchData from 'obra-icons-website/src/lib/keywords';

	let searchDb: any;
	let filteredIcons: { name: string; component: any }[] = [];

	// Icons used in the UI
	import {
		IconSearch,
		IconStrokeWidth,
		IconCircleClose,
	} from 'obra-icons-svelte';

	let searchTerm = '';

	// Defaults
	let iconProperties = {
		size: {
			value: 24,
			min: 16,
			max: 64,
			step: 4,
		},
		strokeWeight: {
			value: 1.5,
			min: 1,
			max: 2,
			step: 0.5,
		},
	};

	function loadSavedSettings() {
		parent.postMessage(
			{
				pluginMessage: { type: 'load-settings' },
				pluginId: '*',
			},
			'*',
		);
	}

	function iconNamePascal(name: string) {
		const pascal = name
			.split('-')
			.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
			.join('');

		return `Icon${pascal}`;
	}

	const iconList = Object.entries(Icons)
		.filter(([name]) => name.startsWith('Icon'))
		.map(([name, component]) => ({ name, component }));

	onMount(async () => {
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

		// Initial search to populate filteredIcons
		filteredIcons = await performSearch('');
	});

	async function performSearch(term: string) {
		if (!searchDb) return [];

		const results = await search(searchDb, {
			term,
			properties: ['nameKebab', 'keywords'],
			limit: 50,
			boost: {
				keywords: 2,
			},
		});

		return results.hits.map((hit) => ({
			name: hit.document.namePascal,
			component: Icons[hit.document.namePascal],
		}));
	}

	$: searchIcons = async () => {
		filteredIcons = await performSearch(searchTerm);
	};

	$: {
		searchIcons();
	}

	function handleIconClick(name: string, component: any) {
		const tempDiv = document.createElement('div');
		new component({
			target: tempDiv,
			props: {
				size: iconProperties.size.value,
				strokeWeight: iconProperties.strokeWeight.value,
			},
		});
		const svgString = tempDiv.innerHTML;

		const formattedName = name
			.slice(4) // Remove 'Icon' prefix
			.split(/(?=[A-Z])/) // Split on capital letters
			.map((word) => word.toLowerCase()) // Convert each word to lowercase
			.join(' ') // Join words with spaces
			.trim(); // Remove any leading/trailing spaces

		parent.postMessage(
			{
				pluginMessage: {
					type: 'paste-icon',
					iconName: formattedName,
					svgString,
					strokeWeight: iconProperties.strokeWeight.value,
					iconSize: iconProperties.size.value,
				},
				pluginId: '*',
			},
			'*',
		);
	}

	// Listen for messages from the plugin
	$: window.onmessage = (event) => {
		if (event.data.pluginMessage) {
			const { type, size, strokeWeight } = event.data.pluginMessage;
			if (type === 'load-settings-result') {
				if (size !== undefined) {
					iconProperties.size.value = size;
				}
				if (strokeWeight !== undefined) {
					iconProperties.strokeWeight.value = strokeWeight;
				}
			}
		}
	};

	loadSavedSettings();

	$: filteredIcons = iconList.filter((icon) =>
		icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	$: {
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

	<div class="control-group">
		<label>
			<IconStrokeWidth size={16} />
			<span class="accessible-text">Stroke weight</span>
		</label>
		<div class="stroke-weight-buttons">
			<button
				class="stroke-button {iconProperties.strokeWeight.value === 1
                    ? 'active'
                    : ''}"
				on:click={() => setStrokeWeight(1)}
			>1
			</button>
			<button
				class="stroke-button {iconProperties.strokeWeight.value === 1.5
                    ? 'active'
                    : ''}"
				on:click={() => setStrokeWeight(1.5)}
			>1.5
			</button>
			<button
				class="stroke-button {iconProperties.strokeWeight.value === 2
                    ? 'active'
                    : ''}"
				on:click={() => setStrokeWeight(2)}
			>2
			</button>
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

<div class="icon-grid">
	{#if filteredIcons.length > 0}
		{#each filteredIcons as { name, component }}
			<button
				class="icon-item"
				on:click={() => handleIconClick(name, component)}
			>
				<svelte:component
					this={component}
					size={iconProperties.size.value}
					strokeWidth={iconProperties.strokeWeight.value}
				/>
			</button>
		{/each}
	{:else}
		<p class="no-results">No icons found matching "{searchTerm}"</p>
	{/if}
</div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />
