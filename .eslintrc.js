module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'quotes': [1, 'single'],
    'no-unused-vars': [1]
  }
}
