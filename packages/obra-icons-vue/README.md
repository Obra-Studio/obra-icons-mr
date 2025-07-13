# obra-icons-vue

Obra Icons for <a href="https://vuejs.org/">Vue</a>.

A simple, consistent set of icons, perfect for user interfaces. Obra Icons consists of more than 1000 icons.

## Installation

```shell
npm install -D obra-icons-vue
```

This package works with Vue 2 and 3.

## Usage example

```vue
<script setup>
	import { IconAdd } from 'obra-icons-vue';
</script>

<template>
    <IconAdd :size="48" color="mediumseagreen" :strokeWidth="1"/>
</template>
```

As you can see, you can use the `size`, `color` and `strokeWidth` props to customize the icon.

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

## Running the demo

- clone this repo
- cd into this directory
- run `pnpm i`
- run `pnpm dev` to start the dev server
- open the URL it outputs in your browser