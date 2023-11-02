import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 800,
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
