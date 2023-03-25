import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@types': path.resolve(__dirname, './src/types'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
})