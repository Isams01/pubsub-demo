import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/*.js', '**/dist', 'eslint.config.mjs'],
  },
  ...compat.extends(
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    plugins: {
      prettier,
      '@typescript-eslint': typescriptEslint,
    },
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...globals.node,
        ...globals.jest,
      },

      parser: tsParser,
      parserOptions: {
        // project: path.resolve(process.cwd(), 'tsconfig.eslint.json'),
        // tsconfigRootDir: dirname,
        project: [path.resolve(process.cwd(), 'tsconfig.eslint.json')],
        tsconfigRootDir: dirname,
      },
      ecmaVersion: 2017,
      sourceType: 'commonjs',
    },

    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      "@typescript-eslint/no-invalid-void-type": "error",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },
];
