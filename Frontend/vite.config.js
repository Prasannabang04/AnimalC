import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // This makes the server listen on 0.0.0.0
    port: 5173,       // Optional: ensures consistency with EXPOSE in Dockerfile
    strictPort: true  // Optional: avoids auto-choosing a different port
  }
})
