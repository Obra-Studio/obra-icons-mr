<script lang="ts">

    import { onMount, onDestroy } from 'svelte';
    import { IconAdd, IconDelete, IconClose, IconCloudUpload } from 'obra-icons-svelte';
    import { colorStore, predefinedColors, customColors } from './store';
    import { toUpperCase } from './utilities'

    $: selectedColor = $colorStore;
    let isOpen = false;
    let isManagingCustomColors = false;
    let isImportingColors = false;
    let newCustomColor = '#666666';

    // Target DOM element
    let pickerElement;

    let importColors = '';
    let importError = '';


    function toggleDropdown() {
        isOpen = !isOpen;
        isManagingCustomColors = false;
        isImportingColors = false;
    }

    function selectColor(color) {
        colorStore.set(toUpperCase(color));
        isOpen = false;
    }
  
    function handleKeydown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        toggleDropdown();
      }
    }
  
    function handleClickOutside(event) {
      if (pickerElement && !pickerElement.contains(event.target)) {
        isOpen = false;
        isManagingCustomColors = false;
        isImportingColors = false;
      }
    }
  
    function openCustomColorManager() {
      isManagingCustomColors = true;
      isImportingColors = false;
    }
  
    function closeCustomColorManager() {
      isManagingCustomColors = false;
    }
  
    function openImportDialog() {
      isImportingColors = true;
      importColors = '';
      importError = '';
    }
  
    function closeImportDialog() {
      isImportingColors = false;
    }
  
    function addCustomColor() {
        const upperCaseColor = toUpperCase(newCustomColor);
        if (!$customColors.includes(upperCaseColor)) {
            customColors.update(colors => [...colors, upperCaseColor]);
            saveCustomColors();
        }
        newCustomColor = '#666666';
    }

    function removeCustomColor(color) {
        customColors.update(colors => colors.filter(c => c !== color));
        saveCustomColors();
    }
  
    function importCustomColors() {
      const colors = importColors.split('\n').map(color => color.trim()).filter(Boolean);
      const validColors = colors.filter(color => /^#[0-9A-F]{6}$/i.test(color));
      
      if (validColors.length !== colors.length) {
        importError = 'Some colors were invalid and were not imported.';
      } else {
        importError = '';
      }
  
      const newValidColors = validColors.filter(color => !$customColors.includes(toUpperCase(color)));
      customColors.update(colors => [...colors, ...newValidColors.map(toUpperCase)]);
      importColors = '';
      if (newValidColors.length > 0) {
        closeImportDialog();
      }
    }
  
    $: newCustomColor = toUpperCase(newCustomColor);

    function saveCustomColors() {
        parent.postMessage(
            {
                pluginMessage: {
                    type: 'save-custom-colors',
                    colors: $customColors,
                },
                pluginId: '*',
            },
            '*'
        );
    }
  
    onMount(() => {
      document.addEventListener('click', handleClickOutside);

      parent.postMessage(
          {
              pluginMessage: { type: 'load-custom-colors' },
              pluginId: '*',
          },
          '*'
      );

      window.onmessage = (event) => {
          if (event.data.pluginMessage && event.data.pluginMessage.type === 'load-custom-colors-result') {
              $customColors = event.data.pluginMessage.colors || [];
          }
      };
    });
  
    onDestroy(() => {
      document.removeEventListener('click', handleClickOutside);
    });
  </script>
  
  
  <div class="color-picker" bind:this={pickerElement}>
    <button
      class="selected-color"
      style="background-color: {selectedColor};"
      on:click|stopPropagation={toggleDropdown}
      on:keydown={handleKeydown}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <!-- Color -->
    </button>
    
    {#if isOpen}
      <div class="menu-overlay color-options-overlay">
        <div class="color-section">
          <div class="color-grid">
            {#each $predefinedColors as color}
              <button
                class="color-option"
                style="background-color: {toUpperCase(color)};"
                on:click={() => selectColor(color)}
              >
                <!-- Color -->
            </button>
            {/each}
          </div>
        </div>
        
        {#if $customColors.length > 0}
          <div class="color-section">
            <h3>Custom colors</h3>
            <div class="color-grid">
              {#each $customColors as color}
                <button
                  class="color-option"
                  style="background-color: {color};"
                  on:click={() => selectColor(color)}
                >
                <!-- Color -->
              </button>
              {/each}
            </div>
          </div>
        {/if}
        
        <button class="add-custom-color" on:click={openCustomColorManager} title="Manage custom colors">
          <IconAdd size={12} />
        </button>
      </div>
    {/if}
  
    {#if isManagingCustomColors}
      <div class="menu-overlay custom-color-manager-overlay" style="max-height: 200px; overflow: scroll;">
        <div class="overlay-header">
          <h3>Manage custom colors</h3>
          <button on:click={closeCustomColorManager} class="icon-button close">
            <IconClose size={12} />
          </button>
        </div>
        <div class="add-color">
          <input type="color" bind:value={newCustomColor}>
          <button on:click={addCustomColor} class="icon-button">
            <IconAdd size={12} />
            <span>Add color</span>
          </button>
        </div>
        <button on:click={openImportDialog} class="icon-button import">
          <IconCloudUpload size={12} />
          <span>Import colors</span>
        </button>
        <div class="custom-color-list">
          <h4>Custom colors</h4>
                {#if customColors.length === 0}
                      <p class="no-colors-message">No custom colors yet</p>
                {:else}
                  {#each $customColors as color}
                    <div class="custom-color-item">
                    <div class="color-preview" style="background-color: {color};"></div>
                    <span>{color}</span>
                    <button on:click={() => removeCustomColor(color)} class="icon-button delete">
                        <IconDelete size={12} />
                    </button>
                    </div>
                      {/each}
                {/if}
        </div>
      </div>
    {/if}
  
    {#if isImportingColors}
      <div class="menu-overlay import-dialog-overlay">
        <div class="overlay-header">
          <h3>Import colors</h3>
          <button on:click={closeImportDialog} class="icon-button close">
            <IconClose size={16} />
          </button>
        </div>
        <p>Paste hex codes, one per line:</p>
        <textarea bind:value={importColors} placeholder="#RRGGBB"></textarea>
        <button on:click={importCustomColors} class="icon-button">
          <IconCloudUpload size={12} />
          <span>Import colors</span>
        </button>
        {#if importError}
          <p class="error">{importError}</p>
        {/if}
      </div>
    {/if}
  </div>
  
  <style>

    .color-picker {
      position: relative;
    }
  
    .selected-color {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 1px solid #e0e0e0;
      cursor: pointer;
      outline: none;
    }
  
    .selected-color:focus {
      border: 2px solid #18a0fb;
    }
  
    .menu-overlay {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: var(--lvl-1-bg);
      border-radius: 8px;
      padding: 8px;
      margin-top: 4px;
      box-shadow: 0px 10px 16px rgba(0, 0, 0, .35), 0px 2px 5px rgba(0, 0, 0, .35), inset 0px .5px 0px rgba(255, 255, 255, .08), inset 0px 0px .5px rgba(255, 255, 255, .35);
    }
  
    .color-options-overlay {
      z-index: 10;
    }
  
    .custom-color-manager-overlay {
      z-index: 20;
      min-width: 200px;
    }
  
    .import-dialog-overlay {
      z-index: 30;
      min-width: 200px;
    }
  
    .overlay-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
  
    .overlay-header h3 {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
    }
  
    /* Color Grid Styles */
    .color-section {
      margin-bottom: 8px;
    }
  
    .color-section h3 {
      margin-top: 0;
      margin-bottom: 4px;
      font-size: 11px;
      font-weight: 400;
    }
  
    .color-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 4px;
    }
  
    .color-option {
      width: 1.25rem;
      height: 1.25rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
  
    .color-option:hover {
      transform: scale(1.1);
    }
  
    .add-custom-color {
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;
      background-color: var(--lvl-1-bg);
      display: flex;
      align-items: center;
      border: none;
      padding: 0;
      justify-content: center;
      cursor: pointer;
      margin-top: 4px;
    }
  

    /* Custom Color Manager Styles */
    .add-color {
      display: flex;
      margin-bottom: 8px;
    }
  
    textarea {
        border: none;
    }

    textarea:focus-visible {
        box-shadow: 0 0 0 2px #000;
        outline: none;
    }

    .add-color input {
      margin-right: 4px;
      width: 24px;
      height: 24px;
      padding: 0;
      border: 1px solid #e0e0e0;
      border-radius: 50%;
    }
  
    .custom-color-item {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }
  
    .color-preview {
      width: 16px;
      height: 16px;
      border-radius: 50%;  /* Changed to 50% for consistency */
      margin-right: 6px;
    }
  
    .custom-color-list h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 11px;
      font-weight: 400;
    }
  
    .icon-button {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      padding: 4px 6px;
      border-radius: 6px;
      font-size: 11px;
      background-color: var(--lvl-2-bg);
    }
  
    .icon-button.delete {
      margin-left: auto;
      color: #ff3b30;
      padding: 2px;
    }

    .icon-button.close {
      padding: 2px;
    }
  
    .icon-button span {
      margin-left: 4px;
    }
  
    .icon-button.import {
      width: 100%;
      justify-content: center;
      margin-bottom: 8px;
    }
    
    .import-dialog-overlay p {
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-size: 11px;
      color: #666;
    }
  
    .import-dialog-overlay textarea {
      width: 100%;
      height: 60px;
      margin-bottom: 0.5rem;
      padding: 0.25rem;
      font-size: 11px;
      border-radius: 6px;
      resize: vertical;
    }
  
    .error {
      color: #FF3B30;
      font-size: 11px;
      margin-bottom: 0.5rem;
      padding: 0.25rem;
      background-color: #FFEBEE;
      border-radius: 4px;
      border: 1px solid #FFCDD2;
    }
  
    .no-colors-message {
      font-size: 11px;
      color: #666;
      margin: 8px 0;
    }
  </style>