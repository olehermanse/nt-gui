const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 */

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project
  },
  plugins: ['prettier', 'sonarjs', '@typescript-eslint', 'import'],
  globals: {
    JSX: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    'consistent-this': ['error', 'self'],
    'import/no-named-as-default': 'off',
    'prettier/prettier': 'error',
    'no-console': 'off',
    'no-multiple-empty-lines': 'error',
    'no-prototype-builtins': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'sonarjs/cognitive-complexity': ['error', 17]
  }
};
