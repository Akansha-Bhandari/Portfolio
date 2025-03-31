import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Matches your GitHub repo name
  build: {
    outDir: 'dist',     // Explicit output folder
    emptyOutDir: true,  // Clears the dist folder on each build
  }
})
