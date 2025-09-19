import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    chunkSizeWarningLimit: 1000, // (optional) increase limit to avoid warnings
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], // splits react libs into separate chunk
        },
      },
    },
  },
})
