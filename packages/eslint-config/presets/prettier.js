/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', semi: true }],
  },
};
