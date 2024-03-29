import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    include: ['apps/**/*.{spec,test}.{js,ts}'],
    reporters: ['verbose', 'html'],
    outputFile: 'report/index.html'
  }
})
