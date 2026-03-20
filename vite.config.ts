// @ts-nocheck
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { PATH } from './config.js';

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
      '@PATH.DS.COMPONENTS': path.resolve(__dirname, PATH.DS.COMPONENTS),
      '@PATH.DS.KLUBLOTTO': path.resolve(__dirname, PATH.DS.KLUBLOTTO),
      '@PATH.DS.QUICK': path.resolve(__dirname, PATH.DS.QUICK),
      '@PATH.DS.AVALONCOMPONENTS': path.resolve(__dirname, PATH.DS.AVALONCOMPONENTS),

      '@PATH.MOCK.API_DATA': path.resolve(__dirname, PATH.MOCK.API_DATA),
      '@PATH.MOCK.MOCK': path.resolve(__dirname, PATH.MOCK.MOCK),
      '@PATH.KLUBLOTTO.VIEWS': path.resolve(__dirname, PATH.MOCK.KLUBLOTTO.VIEWS),

      // Overwrite certain Danske Spil paths to hijack API and shared scripts
      '@Ensighten': path.resolve(__dirname, PATH.MOCK.ENSIGHTEN),
      '@ErrorHandling': path.resolve(__dirname, PATH.MOCK.ERRORHANDLING),
      '@SharedScripts': path.resolve(__dirname, PATH.MOCK.SHARED_SCRIPTS),

      // And some more files
      '@ds-itu-frontend-service': path.resolve(__dirname, 'C:/Projects/danskespil-website/node_modules/@ds-itu-frontend-service'),
    },
  },
});
