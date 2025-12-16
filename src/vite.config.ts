import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Cambia 'nombre-de-tu-repo' por el nombre real de tu repositorio
  // Por ejemplo, si tu repo es https://github.com/usuario/mi-boda, usa: base: '/mi-boda/'
  base: '/', // Si usas un dominio personalizado, cambia esto a '/'
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
