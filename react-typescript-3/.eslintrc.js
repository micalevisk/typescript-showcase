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
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
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

  // plugins: ['react', 'import', 'import-helpers', 'jsx-a11y', '@typescript-eslint'],
  plugins: ['react', 'import', 'import-helpers', 'jsx-a11y'],

  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    // 'implicit-arrow-linebreak': ['error', 'below'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'indent': ['error', 2],
    'import/extensions': ['error', 'always', {
      ts: 'never',
      tsx: 'never',
      js: 'never',
      jsx: 'never',
    }],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.tsx'],
    }],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'jsx-a11y/label-has-associated-control': [2, {
      'labelComponents': ['label'],
      'labelAttributes': ['htmlFor'],
      'controlComponents': ['input']
    }],
    'import-helpers/order-imports': ['error', {
      'newlinesBetween': 'always',
      'groups': [
          'module',
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
