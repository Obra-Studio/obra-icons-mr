<script lang="ts">
    import * as Icons from 'obra-icons-svelte';
  
    const iconList = Object.entries(Icons)
      .filter(([name]) => name.startsWith('Icon'))
      .map(([name, component]) => ({ name, component }));

      
    function handleIconClick(name: string, component: any) {
      const tempDiv = document.createElement('div');
      new component({ target: tempDiv, props: { size: 24 } });
      const svgString = tempDiv.innerHTML;
      console.log(svgString);

      parent.postMessage(
        {
          pluginMessage: { type: 'paste-icon', iconName: name, svgString },
          pluginId: '*'
        },
        '*'
      );
      }
</script>
  
  <div class="control-group">
    <label for="strokeWeight">Stroke Weight</label>
    <input
        id="strokeWeight"
        type="range"
        min="1"
        max="10"
        step="0.5"
        value="2"
    />
    <span id="strokeWeightValue">2</span>
  </div>


  <div class="icon-grid">
    {#each iconList as { name, component }}
      <div class="icon-item" on:click={() => handleIconClick(name, component)}>
        <svelte:component this={component} size={24} />
        <span>{name.slice(4)}</span>
      </div>
    {/each}
  </div>
  
  <style>
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 16px;
      padding: 16px;
    }
  
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      cursor: pointer;
    }
  
    .icon-item span {
      font-size: 10px;
      margin-top: 4px;
    }
  </style>