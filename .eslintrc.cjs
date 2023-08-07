const { base, typescript } = require('./.eslintrc.base.cjs')

module.exports = {
  root: true,
  ...base,
  overrides: [
    {
      ...typescript,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  ignorePatterns: [
    'dist',
    'build',
  ],
}
