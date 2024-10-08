const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 *
 */

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:react/recommended'], //, 'plugin:react-hooks/recommended'],
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    },
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project,
    tsconfigRootDir: resolve(process.cwd())
  },
  plugins: ['react', 'prettier', 'sonarjs', '@typescript-eslint', 'import'],
  globals: {
    JSX: true
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  rules: {
    'consistent-this': ['error', 'self'],
    'import/no-named-as-default': 'off',
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'no-multiple-empty-lines': 'error',
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'react/forbid-dom-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': 'error',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'sonarjs/cognitive-complexity': ['error', 17]
  }
};
