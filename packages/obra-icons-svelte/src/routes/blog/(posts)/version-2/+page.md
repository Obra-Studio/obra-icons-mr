<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Obra Icons 2.0.0',
        date: '2024-09-07',
        tags: 'news'
    }
</script>

We just released Obra Icons 2.0.0. This release contains over 50 new icons, bringing us closer to that magical number of 1000 icons.

![blog-2pointzero.png](/blog-2pointzero.png)

<h3>Weights</h3>

![blog-2pointzero.png](/blog-2pointzero-weights.png)

Every icon is available in 3 weights. Now, how do you use the different weights?

* On the website, use the sliders on the <a href="http://icons.obra.studio">homepage</a> to change the desired weight of your exports.
* In the source file, choose between one of the three artboards in Figma: 1px, 1.5px or 2px.
* In the Svelte package, use the `strokeWidth` prop.

<h3>Website improvements</h3>

On the website, it's now possible to switch icon weights and sizes. Next to the aforementioned weights, you can change the size of icons between 16px and 128px. You can also customize the action you like to have when clicking an icon.

You can choose between copying the icon's SVG to your clipboard (the default), copying the icon in PNG format, or copying a Svelte import. 


<h3>Fuzzy AI-powered search</h3>

You can use the Obra Icons website to search through the icons for free. All of the icons are tagged with additional keywords via an AI-powered script: you don't need to type the literal name of what you are looking for.

<h3>Source file</h3>

The Figma source file for Obra Icons is now sold through LemonSqueezy. If you want to buy the source file for Obra Icons, take a look:

<p class="center"><a class="button" href="https://obra.lemonsqueezy.com/buy/f8b657b2-719c-42ee-bc71-04786eb182bc">Buy Obra Icons 2.0.0</a></p>

<h3>Breaking changes and enhancements</h3>

In this new version, we made several visual enhancements to older icons. We also removed some icons we did not like anymore visually to improve the overall quality of the set. As we are working on this project for more than a year, our visual standards keep improving.

For our Svelte package, we use semantic versioning. To not break any codebases, we only remove icons from the set when moving up a major version. This was a good time to remove some older icons that did not meet our quality standards.

We added a changelog to our site so it's easy to keep up to date with any changes.

<p class="center"><a class="button" href="/changelog">View changelog</a></p>

