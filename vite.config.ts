import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/website/',
  plugins: [
    react({}),
    svgr(),
  ],
});
