<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types'

    export const metadata: BlogFrontmatter = {
        title: 'Open sourced Obra Icons monorepo',
        date: '2025-06-16',
        tags: ['open-source']
    }
</script>

The Obra icons monorepo is now open
source. [You can find the repository here](https://github.com/Obra-Studio/obra-icons-mr).

There's a lot of interesting stuff in this pnpm-powered monorepo: this very website, tools we use to develop Obra Icons,
the source code for the different packages (React and Svelte)... in general, we are open to contributions, but we should
probably
explain a bit how things work and make it easier to contribute.

Right now, to be able to run the project completely, you will need your own OpenAI key as well as a Figma API key and
access to the source Figma file. I plan to make a video about this. If you're
curious, [ask on Discord](https://discord.gg/2y8BqXhG) and you might trigger me to get started!

We will need to explain how the dev tools work, what
our [quality standards](https://github.com/Obra-Studio/obra-icons-mr/issues/59) are. And also what the plans are for
Obra Icons 2.0. The project will likely be in a phase of having little docs, but still being open source for a while.

We'll hopefully get to that at some point. Right now we are promoting our brand
new [shadcn/ui kit](https://obra.studio/blog/2025/06/12/obra-shadcn-ui-kit-officially-released/).
