---
description: "Use when creating a new KlubLotto component, adding a route preview, or building a new view. Covers the two-file pattern: View component + route file, HTML-in-template-literal convention, and generate commands."
applyTo: "src/{routes/klublotto,DanskeSpil/KlubLotto/Views}/**"
---
# KlubLotto Component Pattern

New components always consist of two files. Use existing files as reference — `ContestOverview`, `CrossSaleSpot`, and `PageHeader` in `src/DanskeSpil/KlubLotto/Views/` are good examples.

## 1. View file — `src/DanskeSpil/KlubLotto/Views/ComponentName.tsx`

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

## 2. Route file — `src/routes/klublotto/ComponentName.tsx`

```tsx
import { createFileRoute } from '@tanstack/react-router';
import { ComponentName } from '../../DanskeSpil/KlubLotto/Views/ComponentName';

export const Route = createFileRoute('/klublotto/ComponentName')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ComponentName />;
}
```

## 3. After creating both files

```sh
npm run generate:routes   # registers the new route in the navigation index
```

If you also added a new `.less` file in the sibling repo at the same time:

```sh
npm run generate:styles   # re-imports LESS from danskespil-website
```
