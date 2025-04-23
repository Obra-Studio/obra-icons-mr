# obra-icons-figma-plugin

## Quickstart

This plugin was created with [Plugma](https://github.com/gavinmcfarland/plugma) using the [Svelte](https://svelte.dev/) framework.

### Requirements

-   [Node.js](https://nodejs.org/en)
-   [Figma desktop app](https://www.figma.com/downloads/)

### Develop and Import

1. From the root of the monorepo:

    ```shell
    pnpm install # install the dependencies
    pnpm build # build the svelte icons needed for the plugin
    ```

1. At the plugin level:

    ```shell
    pnpm dev # watch for changes
    ```

1. Open the Figma desktop app and import the plugin:

    - Open a file in Figma.
    - Search for "Import plugin from manifest..." using the [Quick Actions](https://help.figma.com/hc/en-us/articles/360040328653-Use-shortcuts-and-quick-actions#Use_quick_actions) bar.
    - Choose the `manifest.json` file from the `dist` folder.

1. Manage `manifest` details from inside `package.json`.

### Browser Preview

Run this command to preview your plugin in the browser during development.

```shell
pnpm preview
```

_Make sure the plugin is open in the Figma desktop app._

### Publish

Before publishing, make sure to create a build:

```shell
pnpm build
```

Now you can publish the plugin from the Figma desktop app.

### Advanced

See [Plugma](https://github.com/gavinmcfarland/plugma) for further options.
