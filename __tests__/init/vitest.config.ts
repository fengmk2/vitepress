import { defineConfig } from 'vite-plus'

const timeout = 60_000

export default defineConfig({
  test: {
    testTimeout: timeout,
    hookTimeout: timeout,
    teardownTimeout: timeout,
    globals: true
  }
})
