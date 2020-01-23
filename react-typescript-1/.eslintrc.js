module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],

  ignorePatterns: [
    'config/**/*.js', // files ejected by CRA
    'scripts/*.js', // files ejected by CRA
    'build/',
  ],

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['react', 'import', 'jsx-a11y', 'import-helpers', '@typescript-eslint'],

  rules: {
    'no-undef': 'off', // due to issue https://github.com/eslint/typescript-eslint-parser/issues/437
    'quotes': ['error', 'single'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      'labelComponents': ['label'],
      'labelAttributes': ['htmlFor'],
      'controlComponents': ['input']
    }],
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ],
    'import-helpers/order-imports': ['error', {
      'newlinesBetween': 'always',
      'groups': [
          'module',
          '/^@/',
          ['parent', 'sibling', 'index']
      ],
      'alphabetize': {
        'order': 'asc',
        'ignoreCase': true
      }
    }],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
      }
    },
  },
};
