module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'max-len': ['error', 100, 2, { ignoreUrls: true }],
    'no-console': 'error', // airbnb использует предупреждение
    'no-alert': 'error', // airbnb использует предупреждение

    'react/require-default-props': 'off', // airbnb использует уведомление об ошибке
    'react/forbid-prop-types': 'off', // airbnb использует уведомление об ошибке
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],

    'prefer-destructuring': 'off',

    'react/no-did-mount-set-state': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ], // для ошибки вложенных свойств htmlFor элементов label

    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    'linebreak-style': 0,
  },
};
