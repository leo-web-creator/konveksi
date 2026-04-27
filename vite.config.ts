import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        uniforms: path.resolve(__dirname, 'professional-uniforms.html'),
        sports: path.resolve(__dirname, 'performance-sports.html'),
        custom: path.resolve(__dirname, 'custom-creations.html'),
        about: path.resolve(__dirname, 'about.html'),
        contact: path.resolve(__dirname, 'contact.html'),
      },
    },
  },
});
