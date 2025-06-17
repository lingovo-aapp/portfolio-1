import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',  // Ensure assets are correctly referenced for relative paths
  build: {
    outDir: 'dist',  // Ensure Vite outputs the production files to the 'dist' folder
  },
})
