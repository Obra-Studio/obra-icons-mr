# portfolio-item

A small Vite + Svelte app that renders `obra-icons-svelte` icons as three
portfolio pieces, for showing the icon design process visually:

1. **Composition** — a 40-icon specimen grid.
2. **Grid zoom** — a single icon blown up over its 24 × 24 construction
   grid, with keylines (bounding box, safe zone, inscribed circle, center
   axes) and ruler ticks. Pick any icon from the dropdown above the artboard.
3. **Filled vs. outline** — an outline/filled pair shown side by side. Pick
   any pair from the dropdown above the artboard.

## Running

```sh
pnpm install
pnpm --filter portfolio-item dev
```

Then open the printed local URL and use the tabs in the top right to switch
views.

## Taking screenshots

Each view renders as a single element with a fixed pixel size and an
`id`, so it can be captured cleanly regardless of window/zoom level
(e.g. via Chrome DevTools "Capture node screenshot" on the element, or any
element-targeted screenshot tool):

- `#artboard-composition` — 1600 × 1000
- `#artboard-zoom` — 1200 × 1200
- `#artboard-comparison` — 1600 × 900

All of the controls (tabs, dropdowns) live outside these elements, so a
screenshot of the artboard itself never includes any UI chrome.
