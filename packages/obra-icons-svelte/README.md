# obra-icons-svelte

Obra Icons for <a href="https://svelte.dev/">Svelte</a>.

A simple, consistent set of icons, perfect for user interfaces. Obra Icons consists of more than 1000 icons.

## Installation

```bash
npm install obra-icons-svelte
```

This package works with Svelte 3/4/5.

## Importing an icon

```svelte
<script>
	import { IconAdd } from 'obra-icons-svelte';
</script>
```

## Customizing an icon

Use the `size`, `color` and `strokeWidth` props to customize the icon.

```
<IconAdd size={24} color="red" strokeWidth={1} />
```

# Targeting with CSS

Every SVG contains an `obra-icon` class on the top level SVG element, that you can target with CSS.

Next to this, the inner elements are also targetable, with the following class names:

-   `oi-fill`: Fill layers
-   `oi-vector`: Vector layers
-   `oi-ellipse`: Ellipse layers
-   `oi-box`: Box layers
-   `oi-triangle`: Triangle layers
-   `oi-incomplete-triangle`: Incomplete triangle layers
-   `oi-mini-square`: Mini square layers
-   `oi-line`: Line layers
-   `oi-mini-dot`: Mini dots
-   `oi-medium-dot`: Medium dots
-   `oi-dot`: Regular dots

## Which icons are available?

For a full reference, see the list at [Obra Icons website](https://icons.obra.studio/icons).
