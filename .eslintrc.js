module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    strict: ['error', 'global'],
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'max-len': 'off',
    'react/jsx-no-constructed-context-values': 'off',
  },
};
