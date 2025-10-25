// vitest.config.js

import path from 'node:path';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // 1. Plugins must be defined at the root level for Vite/Vitest
  plugins: [
    storybookTest({ configDir: path.join(dirname, '.storybook') }),
  ],

  test: {
    // 2. These properties are correctly inside the test object
    name: 'storybook',
    setupFiles: ['./.storybook/vitest.setup.js'],
    
    // 3. Browser configuration for running interaction tests
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }]
    },
  },
});