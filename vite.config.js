import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "react-nabil",
  css: {
    lightningcss: false
  }
})
