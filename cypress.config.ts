import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    baseUrl: 'http://localhost:3001',
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      codeCoverage(on, config);
      return config;
    },
  },
});
