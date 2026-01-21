import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ignores: ['dist/**', 'node_modules/**', 'docs/**', '**/*.d.ts'],
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/component-api-style': ['error', ['script-setup', 'composition']],
      'vue/component-name-in-template-casing': 'error',
      'vue/block-lang': [
        'error',
        {
          script: { lang: 'ts' },
        },
      ],
      'vue/define-macros-order': [
        'warn',
        {
          order: ['defineProps', 'defineEmits'],
        },
      ],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/match-component-import-name': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-tags': 'warn',
      'vue/no-mutating-props': 'off',
      'vue/require-default-prop': 'off',

      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': ['warn'],
      'no-prototype-builtins': 'off',
    },
  }
)
