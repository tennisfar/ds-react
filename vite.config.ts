import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact(), tailwindcss()],
  server: {
    port: 5173,
    fs: {
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@Ensighten': path.resolve(__dirname, 'src/mocks/@Ensighten'),
      '@KlubLotto': path.resolve(__dirname, '../develop/Website/Components/DanskeSpil/Domain/Feature.KlubLotto'),
    },
  },
});
