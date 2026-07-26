// @ts-expect-error This lib does not expose type definitions
import baseConfig from '@shlinkio/eslint-config-js-coding-standard/oxc/base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig],
  overrides: [
    {
      files: ['./*.config.ts'],
      rules: {
        'eslint/no-restricted-exports': 'off',
      }
    }
  ]
});
