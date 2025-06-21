# Obra Icons Framer Plugin

A comprehensive Framer plugin that brings the entire Obra Icons library to your Framer projects. Easily search, customize, and insert beautiful icons directly into your designs.

## Features

-   **1000+ Icons**: Access to the complete Obra Icons library
-   **Smart Search**: Powerful search functionality with keyword matching
-   **Customizable**: Adjust size, stroke weight, and color
-   **Color Picker**: Built-in color picker with custom color management
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
    - **Color**: Use the color picker or add custom colors
4. Click any icon to add it to your canvas

## Features in Detail

### Search Functionality

-   Type keywords to find icons quickly
-   Search results are ranked by relevance
-   Clear search button to reset results

### Customization Options

-   **Size Control**: Responsive slider for precise sizing
-   **Stroke Weight**: Radio buttons for stroke thickness
-   **Color Management**:
    -   Predefined color palette
    -   Custom color picker
    -   Save and manage custom colors
    -   Import color lists

### Icon Rendering

-   High-quality SVG icons
-   Proper color and stroke application
-   Maintains vector quality at all sizes
-   Optimized for Framer's rendering system

## Architecture

The plugin is built with:

-   **React**: For the user interface
-   **TypeScript**: For type safety
-   **Orama**: For fast, client-side search
-   **Framer Plugin API**: For canvas integration

Learn more: https://www.framer.com/developers/plugins/introduction
