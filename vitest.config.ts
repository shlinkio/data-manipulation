import { defineConfig } from 'vitest/config';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/test.ts'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage',
      include: ['src/**/index.ts'],
      reporter: ['text', 'text-summary', 'clover', 'html'],

      // Required code coverage. Lower than this will make the check fail
      thresholds: {
        statements: 95,
        branches: 90,
        functions: 95,
        lines: 95,
      },
    },
  },
});
