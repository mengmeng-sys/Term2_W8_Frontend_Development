import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:{
      '@ex1':path.resolve(__dirname,'../Exercise1/src'),
      '@ex3':path.resolve(__dirname,'../Exercise3/src'),
    }
    
  }
})
