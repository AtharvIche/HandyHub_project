import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // If your Spring Boot endpoints start with /api, this will proxy them
        target: 'http://localhost:8080', // Your Spring Boot server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Ensure the /api prefix is kept
      },
    },
    port: 5173, // Default Vite port, confirm it's what you're using
  },
})