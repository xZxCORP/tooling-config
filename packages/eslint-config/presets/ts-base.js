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
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: ['@typescript-eslint', 'unicorn', 'simple-import-sort'],
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
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unicorn/prefer-module': 'off',
    'semi': 'off',
    'semi-style': 'off',
  },
};
