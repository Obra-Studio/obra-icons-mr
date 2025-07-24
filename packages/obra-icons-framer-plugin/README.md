# Obra Icons Framer Plugin

A comprehensive Framer plugin that brings the entire Obra Icons library to your Framer projects. Easily search, customize, and insert beautiful icons directly into your designs.

## Features

-   **1000+ Icons**: Access to the complete Obra Icons library
-   **Smart Search**: Powerful search functionality with keyword matching
-   **Customizable**: Adjust size and stroke weight
-   **Drag & Drop**: Drag icons directly onto your canvas
-   **Responsive**: Optimized for the Framer plugin interface

## Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

## Development

To start the development server with live reloading:

```bash
pnpm dev
```

This will start the plugin in development mode. You can then load it in Framer for testing.

## Building

To build the plugin for production:

```bash
pnpm build
```

## Packaging

To create a plugin package for distribution:

```bash
pnpm pack
```

## Usage

1. Open the Obra Icons plugin in Framer
2. Use the search bar to find the perfect icon
3. Customize the icon properties:
    - **Size**: Adjust from 12px to 64px
    - **Stroke Weight**: Choose from 1, 1.5, or 2
4. Click any icon to add it to your canvas or drag it directly

## Features in Detail

### Search Functionality

-   Type keywords to find icons quickly
-   Search results are ranked by relevance
-   Search by icon name or related keywords

### Customization Options

-   **Stroke Weight Control**: Choose between Thin (1px), Regular (1.5px), or Bold (2px)
-   **Icon Rendering**: High-quality SVG icons with proper color and stroke application

### Icon Rendering

-   High-quality SVG icons
-   Proper color and stroke application
-   Maintains vector quality at all sizes
-   Optimized for Framer's rendering system

## Architecture

This plugin is built with:

-   **React**: For the user interface
-   **TypeScript**: For type safety
-   **Vite**: For fast development and building
-   **Fuse.js**: For fuzzy search functionality
-   **Obra Icons React**: The icon library

## Icon Library

This plugin uses the [Obra Icons React](https://www.npmjs.com/package/obra-icons-react) package, which provides:

-   1000+ beautifully designed icons
-   Consistent stroke-based design
-   MIT licensed
-   Optimized for web use

## License

MIT License - see the LICENSE file for details.
