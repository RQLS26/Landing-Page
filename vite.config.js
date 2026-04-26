import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './', // For GitHub Pages deployment
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
