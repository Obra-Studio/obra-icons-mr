# Contributing to Obra Icons

Thank you for your interest in contributing!

## Monorepo Structure

- **packages/**: Contains all main packages:
  - **generator/**: Scripts to extract and generate icons and keywords.
  - **obra-icons-dev-tools/**: Helper tools and scripts.
  - **obra-icons-figma-plugin/**: Figma plugin.
  - **obra-icons-react/**: React icon package.
  - **obra-icons-svelte/**: Svelte icon package.
  - **website/**: Documentation and demo website.

## Getting Started

1. Install dependencies:
   ```sh
   pnpm install
   ```

2. For local development of a package, navigate to its folder and follow its `README.md` instructions.

3. To run the website locally:
   ```sh
   pnpm --filter obra-icons-website
   ```

## Best Practices

- Create descriptive branches for your changes.
- Make sure tests (if any) pass before submitting a PR.
- Follow the existing code style (`pnpm format` to format).
- Check each package's `README.md` for specific details.

## Useful Scripts

- `pnpm build`: Build all packages.
- `pnpm format`: Format the codebase.
- `pnpm run generate`: Generate icons and keywords.

## Pull Requests

1. Fork the repo and create your branch.
2. Make your changes and commit them.
3. Open a Pull Request describing your changes.

Thank you for helping improve Obra Icons!