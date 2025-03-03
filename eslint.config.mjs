import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        importAttributes: 'always-multiline',
        dynamicImports: 'always-multiline',
      }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      ...eslintPluginReadableTailwind.configs.warning.rules,
    },
  }
)
