# DS React — Workspace Instructions

A local development harness for previewing and iterating on components from the [danskespil-website](../config.js) project without a full build/deploy cycle.

## Prerequisites

Requires a sibling repo at `C:/Projects/danskespil-website/`. The shared base path is configured in [`config.js`](../config.js) — update it if your local path differs before running anything.

## Build & Dev

```sh
npm install
npm run generate:styles   # imports LESS files from danskespil-website
npm run generate:routes   # generates src/routes/*/index.tsx navigation files
npm run dev               # starts Vite dev server with HMR
```

Run `generate:styles` and `generate:routes` again whenever you add new routes or pull LESS changes from the sibling repo. There is no test runner configured.

**Lint / format:**

```sh
npm run lint              # esprint check
npm run lint:js:fix       # esprint --fix
npm run prettier          # prettier --write .
```

## Architecture

```
src/
  routes/          # TanStack Router file-based routes (add new component previews here)
  ds-imports/      # Node scripts: copy TS/TSX from danskespil-website + generate route indexes
  @ApiData/        # Static JSON fixtures — mock API responses for local dev
  @Mock/           # Dev harness: mock Header, Footer, Navigations, AppToggle, hooks
  DanskeSpil/      # Stub platform dependencies (@Ensighten, @ErrorHandling, @SharedScripts)
  styles/          # LESS entry files (auto-populated by generate:styles)
```

**How it fits together:** `vite.config.ts` reads `config.js` path aliases to redirect real DS platform imports (`@KlubLotto/*`, `@Ensighten`, etc.) to either the sibling repo or local stubs in `src/DanskeSpil/` and `src/@Mock/`. The `src/ds-imports/` scripts copy source files from the sibling repo into this project so Vite can resolve them.

**Adding a route/component preview:**
1. Create a file under `src/routes/<group>/ComponentName.tsx`
2. Run `npm run generate:routes` to register it in the navigation index
3. The route is instantly available at `/<group>/ComponentName` in dev

**Route tree** is auto-generated into `src/routeTree.gen.ts` — do not edit by hand.

## Code Style

See [`CONTRIBUTING.md`](../CONTRIBUTING.md) for the full style guide. Key points:

- TypeScript for all new code; avoid `any`
- `type` aliases over `interface`
- Functional components + hooks only
- Type names end with `Props` (e.g., `MyComponentProps`)
- When co-locating `useEffect` + `useState`, extract a custom hook

**Tailwind spacing:** uses a custom integer-to-rem scale (`10 → 1rem`, `20 → 2rem`, etc.) — see [`tailwind.config.js`](../tailwind.config.js).

## Common Pitfalls

- **Stale styles/routes:** Always re-run `generate:styles` / `generate:routes` after pulling changes or adding files — forgetting this is the most common source of "component not showing up" issues.
- **Wrong `dsPath`:** If Vite can't resolve `@KlubLotto/*` or similar, check `config.js` — the path must point to your local `danskespil-website` clone.
- **`routeTree.gen.ts`:** Never edit manually; it is overwritten by the TanStack Vite plugin on every dev start.
