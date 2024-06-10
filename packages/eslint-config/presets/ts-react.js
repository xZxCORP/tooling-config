/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './ts-base.js',
    './prettier.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
