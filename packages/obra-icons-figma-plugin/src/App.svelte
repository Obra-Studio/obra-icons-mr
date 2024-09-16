<script lang="ts">
    import * as Icons from 'obra-icons-svelte';
    import { IconSearch, IconBox, IconStrokeWidth } from 'obra-icons-svelte';

    const iconList = Object.entries(Icons)
        .filter(([name]) => name.startsWith('Icon'))
        .map(([name, component]) => ({ name, component }));

    function handleIconClick(name: string, component: any) {
        const tempDiv = document.createElement('div');
        new component({ target: tempDiv, props: { size: iconProperties.size, strokeWeight: iconProperties.strokeWeight } });
        const svgString = tempDiv.innerHTML;

        const formattedName = name
            .slice(4) // Remove 'Icon' prefix
            .split(/(?=[A-Z])/) // Split on capital letters
            .map(word => word.toLowerCase()) // Convert each word to lowercase
            .join(' ') // Join words with spaces
            .trim(); // Remove any leading/trailing spaces

        parent.postMessage(
            {
                pluginMessage: {
                    type: 'paste-icon',
                    iconName: formattedName,
                    svgString,
                    strokeWeight: iconProperties.strokeWeight,
                    iconSize: iconProperties.size
                },
                pluginId: '*',
            },
            '*',
        );
    }

    let searchTerm = '';
    let isDragging = false; 
    let startX = 0; 

    let iconProperties = {
        size: 24,
        strokeWeight: 1,
        step: {
            size: 4,
            weight: 0.5
        },
        min: {
            size: 16,
            weight: 1
        },
        max: {
            size: 128,
            weight: 2
        }
    };
    let activeStrokeWeight = iconProperties.strokeWeight;

    $: filteredIcons = iconList.filter(icon => 
        icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let draggingControl: 'size' | 'stroke' | null = null; 

    function onMouseDown(event: MouseEvent, control: 'size' | 'stroke') {
        isDragging = true;
        draggingControl = control; 
        startX = event.clientX; 
        event.preventDefault(); 
    }

    function setStrokeWeight(weight: number) {
        iconProperties.strokeWeight = weight;
        activeStrokeWeight = weight;
    }
    
    function onMouseMove(event: MouseEvent) {
        if (isDragging) {
            const deltaX = event.clientX - startX; 
            if (draggingControl === 'size') {
                iconProperties.size += Math.round(deltaX);
                iconProperties.size = Math.round(iconProperties.size / iconProperties.step.size) * iconProperties.step.size; // Round to nearest step
                iconProperties.size = Math.min(
                    Math.max(iconProperties.size, iconProperties.min.size),
                    iconProperties.max.size
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
            id="iconSize"
            type="range"
            min={iconProperties.min.size}
            max={iconProperties.max.size}
            step={iconProperties.step.size}
            bind:value={iconProperties.size}
        />
        <span 
            on:mousedown={event => onMouseDown(event, 'size')} 
            on:mousemove={onMouseMove} 
            on:mouseup={onMouseUp} 
            style="cursor: ew-resize;"
        >
            {iconProperties.size}px
        </span>
    </div>

    <div class="control-group">
        <label>
            <IconStrokeWidth size={16} />
            <span class="accessible-text">Stroke weight</span>
        </label>
        <div class="stroke-weight-buttons">
            <button 
                class="stroke-button {activeStrokeWeight === 1 ? 'active' : ''}" 
                on:click={() => setStrokeWeight(1)}>1</button>
            <button 
                class="stroke-button {activeStrokeWeight === 1.5 ? 'active' : ''}" 
                on:click={() => setStrokeWeight(1.5)}>1.5</button>
            <button 
                class="stroke-button {activeStrokeWeight === 2 ? 'active' : ''}" 
                on:click={() => setStrokeWeight(2)}>2</button>
        </div>
    </div>
</div>

<div class="search-holder">
    <IconSearch size={16} />
    <input bind:value={searchTerm} placeholder="Enter your search term&hellip;" type="text" />
</div>


<div class="icon-grid">
    {#each filteredIcons as { name, component }}
        <button class="icon-item" on:click={() => handleIconClick(name, component)}>
            <svelte:component this={component} size={iconProperties.size} strokeWidth={iconProperties.strokeWeight} />
            <!-- <span>{name.slice(4)}</span> -->
        </button>
    {/each}
</div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />