import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { PATHS } from './config.js';

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
      '@ApiData': path.resolve(__dirname, PATHS.ApiData),
      '@Ensighten': path.resolve(__dirname, PATHS.Ensighten),
      '@ErrorHandling': path.resolve(__dirname, PATHS.ErrorHandling),
      '@KlubLotto': path.resolve(__dirname, PATHS.KlubLotto),
      '@Mock': path.resolve(__dirname, PATHS.Mock),
      '@SharedScripts': path.resolve(__dirname, PATHS.SharedScripts),
    },
  },
});
