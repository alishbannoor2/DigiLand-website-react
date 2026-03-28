import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 👇 Add these lines
  base: './',              // ensures relative paths for assets
  build: {
    outDir: 'dist',        // make sure Vercel looks at dist/
    assetsDir: 'assets',   // keeps images/css/js organized
  }
})