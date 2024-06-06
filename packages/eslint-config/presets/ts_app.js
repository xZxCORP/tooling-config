/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./ts_base.js', './prettier.js'],
  plugins: ['@adonisjs/eslint-plugin'],
}
