import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages: cambia 'nombre-repo' por el nombre de tu repositorio
  // Ejemplo: si tu repo es "boda-santi-elena", usa: base: '/boda-santi-elena/'
  // Si usas dominio personalizado, usa: base: '/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});