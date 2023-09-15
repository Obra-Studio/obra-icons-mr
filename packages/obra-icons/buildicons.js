import path from 'path';
import fs from 'fs-extra';

let source = `<script>
  export let icon;
  export let size = '24';

  let html;
  switch (icon) {
`;
for (const x of chosenIcons) {
	const f = x;
	source += `    case "${x}":
      html = \`${monoIcons[f]}\`
      break;
`;
}

source += `    default:
  console.log("undefined icon");
}
</script>

{#if iconAnimatedClass}
  <div class="o-svg-icon {iconAnimatedClass}">
    {@html html}
  </div>
{:else}
  <div class="o-svg-icon">
    {@html html}
  </div>
{/if}


`;

const filepath = `./src/lib/SvgIconGenerated.svelte`;

fs.ensureDir(path.dirname(filepath)).then(() =>
	fs.writeFile(filepath, source, 'utf8'),
);
