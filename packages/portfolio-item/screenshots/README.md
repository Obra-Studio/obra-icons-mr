# screenshots/ — headless reference screenshots

Screenshots each finished artboard (composition variants, weights, filled vs.
outline) in light and dark mode using Playwright/Chromium — same idea as the
sibling [`obra-lemon-admin-saas-react`](../../../../obra-lemon-admin-saas-react)
project's `screenshots/capture.mjs`, adapted for this app: no auth/routing
here, so each artboard is reached by deep-linking into `App.svelte`'s own
state via query params instead of a real route, and we screenshot just the
fixed-size `#artboard-*` element rather than the whole viewport.

## Usage

```bash
pnpm screenshots
```

Output: `out/screenshots/<item>/<light|dark>.png` — each artboard captured at
its native pixel size × 2 device scale by default (e.g. the 1600×1000
composition artboard comes out **3200×2000**, crisp on any display). Pass
`--scale=1` for exact 1:1 pixels instead.

| Flag                     | Effect                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `--scale=`               | Device scale factor — output pixels = artboard size × scale (default 2)                                       |
| `--items=`               | Comma list of `composition-product,composition-business,composition-tech,weights,comparison` (default: all 5) |
| `--themes=`              | Comma list of `light,dark` (default: both)                                                                    |
| `--out=`                 | Output directory (default `out/screenshots`)                                                                  |
| `--width=` / `--height=` | Browser viewport in CSS pixels (default 1800×1300 — just needs to be bigger than the largest artboard)        |

## How it works

1. Spawns its own `pnpm dev` (Vite) and waits for the printed `Local:` URL.
2. Opens one Playwright context per theme with `deviceScaleFactor` set.
3. For each item, navigates to `/?view=...&theme=...` (and `variant=`/`icon=`
   where relevant) — `App.svelte` reads these query params once at startup to
   set its initial `view`/`dark`/`compositionVariantIndex`/`zoomIndex` state,
   so there's no need to click through the UI or wait for a toggle.
4. Waits for `networkidle` plus a short settle delay, then screenshots just
   the `#artboard-*` element (not the full page), so the output resolution is
   exactly that element's rendered size × scale.

## Items

| Slug                   | Query                         |
| ---------------------- | ----------------------------- |
| `composition-product`  | `?view=composition&variant=0` |
| `composition-business` | `?view=composition&variant=1` |
| `composition-tech`     | `?view=composition&variant=2` |
| `weights`              | `?view=zoom&icon=Home`        |
| `comparison`           | `?view=comparison`            |
