import fs from 'fs';
import path from 'path';

const routesRoot = path.resolve('src/routes');

function capitalize(text) {
  return text.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function findSubfolderIndexes(root) {
  // Find all subfolder index.tsx files (excluding root and __root)
  const result = [];
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        const indexPath = path.join(dir, entry.name, 'index.tsx');
        if (fs.existsSync(indexPath)) {
          // Exclude __root and root itself
          if (entry.name !== '__root') {
            result.push({
              route: '/' + path.relative(routesRoot, path.join(dir, entry.name)).replace(/\\/g, '/'),
              name: capitalize(entry.name),
            });
          }
        }
        walk(path.join(dir, entry.name));
      }
    }
  }
  walk(root);
  return result;
}

function normalizeRoute(base, file) {
  let routeBase = base === '/' ? '' : base.replace(/\/$/, '');
  return `${routeBase}/${file}`.replace(/\/+/g, '/');
}

function generateLinks(folder, indexFile) {
  let rel = path.relative(routesRoot, folder).replace(/\\/g, '/');
  let routeBase = rel === '' ? '/' : '/' + rel;

  let links = '';
  if (routeBase === '/') {
    // Outermost index: link to all subfolder indexes
    const subIndexes = findSubfolderIndexes(routesRoot);
    links = subIndexes
      .map(
        ({ route, name }) => `<Link to="${route}" className="dsr-routes__link dsr-routes__link--main">${name}</Link>`
      )
      .join('\n');
  } else {
    // Normal: link to sibling .tsx files (excluding index.tsx and __root.tsx)
    const files = fs.readdirSync(folder).filter((f) => f.endsWith('.tsx') && f !== 'index.tsx' && f !== '__root.tsx');
    if (files.length === 0) return;
    links = `<Link className="dsr-routes__link dsr-routes__link--back" to="/">&larr;&nbsp; Back</Link>`;
    links += files
      .map((f) => {
        const route = normalizeRoute(routeBase, f.replace('.tsx', ''));
        const text = capitalize(f.replace('.tsx', ''));
        return `<Link className="dsr-routes__link" to="${route}">${text}</Link>`;
      })
      .join('\n');
  }

  const content = `import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('${routeBase === '/' ? '/' : routeBase + '/'}')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="dsr-routes">
${links}
  </div>
}
`;

  fs.writeFileSync(indexFile, content, 'utf8');
  console.log(`✅ Generated ${indexFile} for ${routeBase}`);
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      walk(path.join(dir, entry.name));
    } else if (entry.name === 'index.tsx') {
      generateLinks(dir, path.join(dir, 'index.tsx'));
    }
  }
}

walk(routesRoot);
