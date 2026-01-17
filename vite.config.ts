/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    include: ['html-to-image']
  },
  ssr: {
    target: 'webworker',
    noExternal: ['react-helmet-async'],
  },
  build: {
    outDir: ssrBuild ? 'dist/server' : 'dist/client',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/main.tsx', 'src/vite-env.d.ts', 'src/test/**'],
    },
  },
}))
