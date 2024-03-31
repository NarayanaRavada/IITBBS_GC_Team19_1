import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import dotenv from 'dotenv';

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
