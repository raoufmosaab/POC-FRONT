import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ram-drupal.ddev.site:8443',
        changeOrigin: true,
        secure: false, // This will ignore the SSL certificate errors
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});