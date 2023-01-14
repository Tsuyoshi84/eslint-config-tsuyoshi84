module.exports = {
  extends: [
    './.eslintrc.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',

    // typescript-eslint rules
    '@typescript-eslint/no-redeclare': [
      'error',
      {
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/strict-boolean-expressions': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
