/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn'],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'temp',
    'build',
    'dist',
    'public/assets',
    'pnpm-lock.yaml',
    'yarn.lock',
    'package-lock.json',
    '__snapshots__',
    '!.github',
    '!.vscode',
  ],
  rules: {},
}
