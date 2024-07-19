<script>
    import { onMount, onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { writable } from 'svelte/store';

    let count = writable(1);
    let maxLimit = writable(8);
    const device = writable('desktop');

    let interval;

    onMount(() => {
      function checkDevice() {
        device.set(window.innerWidth > 960 ? 'desktop' : 'mobile');
      }

      checkDevice();

      window.addEventListener('resize', checkDevice);

      interval = setInterval(() => {
        $count = $count < $maxLimit ? $count + 1 : 1;
      }, 3000);

      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', checkDevice);
      };
    });
</script>

<div class="preview">
  {#key count}
    <div transition:fade={{ delay: 250, duration: 300 }}>
      <img src={`/icons-${$count}-${$device}.png`} alt="Obra Icons" />
    </div>
  {/key}
</div>

<style>
    .preview {
        display: block;
        margin: 0 auto;
        position: relative;
        aspect-ratio: 1.3 / 1;
        margin-bottom: 48px;
        max-width: 468px;
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media (min-width: 960px) {
        .preview {
            aspect-ratio: 5.57 / 1;
            max-width: 936px;
        }
    }
</style>
