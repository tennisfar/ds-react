---
description: "Use when creating a new KlubLotto component, adding a route preview, or building a new view. Covers the component/types/styles folder pattern (mirroring the main danskespil-website repo), the route file, HTML-in-template-literal convention, and generate commands."
applyTo: "src/{routes/klublotto,Feature.KlubLotto/Scripts}/**"
---
# KlubLotto Component Pattern

This structure mirrors the main repo's `Feature.KlubLotto` project layout (`Scripts/Components`, `Scripts/Types`, `Styles`), so components can be copied across repos with minimal changes. Use existing components as reference — `Streak`, `TopUpPrompt`, `ContestOverview`, `CrossSaleSpot`, and `PageHeader` under `src/Feature.KlubLotto/Scripts/Components/` are good examples.

## 1. Component file — `src/Feature.KlubLotto/Scripts/Components/ComponentName/ComponentName.tsx`

The folder name matches the component file name, same as the main repo (e.g. `Button/Button.tsx`, `DailyPlayHub/DailyPlayHub.tsx`).

HTML lives in a template literal and is rendered via `dangerouslySetInnerHTML`. This makes the markup easy to copy into a `.cshtml` view in the sibling repo.

```tsx
export const ComponentName = () => {
  const html = `
<div data-component="ComponentName" class="group w-full" data-tracking="ComponentName">
    <div class="kl-component-name">
        <!-- structure here -->
    </div>
</div>
`;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
```

- Use `class=` (not `className=`) inside the template literal — it's plain HTML
- BEM class names follow the `kl-` prefix convention (e.g. `kl-prize-draw-experience__inner`)
- Props can be interpolated with `${propName}` if the component needs dynamic values (see `CrossSaleSpot.tsx`)

## 2. Types — `src/Feature.KlubLotto/Scripts/Types/componentName.ts`

If the component takes props (or has other non-trivial types), put them in a separate file (camelCase file name) rather than declaring inline, matching the main repo's `Scripts/Types/*.ts` convention. Export as `ComponentNameProps` and import with `import { ComponentNameProps } from '../../Types/componentName';`.

## 3. Data fetching — `Scripts/Api` + `Scripts/Hooks`

Components never call `ApiRequest` directly. Follow the main repo's three-layer pattern:

- `Scripts/Api/<Name>Api.ts` — a plain async function wrapping `ApiRequest`
- `Scripts/Hooks/use<Name>Data.ts` — wraps the API function in `@tanstack/react-query`'s `useQuery` and returns `{ data, isLoading, isError }`
- The component calls the hook only

See `Streak.tsx` / `useGameResultData.ts` / `GamesApi.ts` for a full example.

## 4. Styles — `src/Feature.KlubLotto/Styles/ComponentName.less`

Styles live flat in `Styles/`, named after the component (matching the main repo, e.g. `DailyPlayHub.less`) — not co-located with the component script. Since these components don't exist in the main repo yet, `generate:styles` won't pick them up automatically, so import the file directly from the component:

```tsx
import '../../../Styles/ComponentName.less';
```

## 5. Route file — `src/routes/klublotto/ComponentName.tsx`

Routing is a ds-react-specific concern and stays under `src/routes/klublotto/`, not part of the mirrored structure.

```tsx
import { createFileRoute } from '@tanstack/react-router';
import { ComponentName } from '../../Feature.KlubLotto/Scripts/Components/ComponentName/ComponentName';

export const Route = createFileRoute('/klublotto/ComponentName')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ComponentName />;
}
```

## 6. After creating the files

```sh
npm run generate:routes   # registers the new route in the navigation index
```

If you also added a new `.less` file in the sibling repo at the same time (i.e. the component now exists in the main repo too):

```sh
npm run generate:styles   # re-imports LESS from danskespil-website
```
