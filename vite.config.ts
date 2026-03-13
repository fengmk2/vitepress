import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    ignorePatterns: ['template/**', 'docs/**', '__tests__/e2e/.vitepress/**'],
    options: {
      typeAware: true,
      typeCheck: true
    }
  },
  fmt: {
    semi: false,
    singleQuote: true,
    printWidth: 80,
    trailingComma: 'none',
    sortPackageJson: false,
    ignorePatterns: [
      '*.md',
      '*.vue',
      'dist',
      'pnpm-lock.yaml',
      'cache',
      'template',
      'temp',
      '!CHANGELOG.md',
      '.temp'
    ]
  }
})
