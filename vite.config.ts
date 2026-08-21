import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ["portfolio-resume-7clm.onrender.com","dawit-girma.onrender.com"]
  }
})
