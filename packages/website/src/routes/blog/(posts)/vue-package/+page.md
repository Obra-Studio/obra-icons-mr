<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Vue package',
        date: '2025-07-21',
        author: 'Johan Ronsse'
    }
</script>

We recently merged Evert’s pull request that optimizes the way we build packages and implemented a Vue package as well.

This led to the first release of the Obra Vue package. [You can find it on npm as obra-icons-vue](https://www.npmjs.com/package/obra-icons-vue). All Obra Icons versions are tagged with similar version numbers so you know which icons are available in which. This is why this version, even though it's the first version, is already 1.23.2. 

We are currently looking into expanding the surface area where Obra Icons can be used. A public project briefing is available on [this Notion website](https://florentine-peak-bd0.notion.site/Project-briefing-Obra-Icons-help-with-packages-and-plugins-237f032f3f07801bb10cdb8c6efa31ea). 

