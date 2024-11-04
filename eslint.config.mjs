import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import cypress from 'eslint-plugin-cypress'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)
const compat = new FlatCompat({
  baseDirectory: dirName,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  eslintConfigPrettier,
  {
    ignores: [
      '**/node_modules',
      '**/.vscode',
      '**/coverage',
      '**/public',
      '**/*.scss'
    ]
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended'
  ),
  {
    plugins: {
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      cypress,
      '@typescript-eslint': typescriptEslint,
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...cypress.environments.globals.globals
      },

      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: [
          './tsconfig.json',
          './src/main/test/cypress/tsconfig.cypress.json'
        ]
      }
    },

    settings: {
      react: {
        version: 'detect'
      },

      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json'
        },

        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      },

      'import/extensions': ['.js', '.jsx', '.tsx', '.ts']
    },

    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/comma-spacing': 'off',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-floating-promises': 'off',
      'import/no-duplicates': 'error',
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-use-before-define': 'error',
      'react/react-in-jsx-scope': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-one-expression-per-line': 'off',
      'react-hooks/rules-of-hooks': 'error',

      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', '.jsx']
        }
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ]
    }
  }
]
