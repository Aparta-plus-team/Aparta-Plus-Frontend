import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': __dirname + '/src',
      '~': __dirname + '/src/app/routes',
      '*': __dirname + '/src/components',
      '+': __dirname + '/src/styles',
      '&': __dirname + '/src/assets',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/static/_variables.scss" as *;`
      },
      sass: {
        additionalData: `@use "@/styles/static/_variables.scss" as *
`
      }
    }
  }
})
