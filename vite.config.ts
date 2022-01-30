import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  define: {
    'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(
      process.env.CONTENTFUL_SPACE_ID
    ),
    'process.env.CONTENTFUL_ACCESS_TOKEN': JSON.stringify(
      process.env.CONTENTFUL_ACCESS_TOKEN
    ),
  },
});
