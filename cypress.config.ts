/* eslint-disable import/no-extraneous-dependencies */
import * as plugin from 'cypress-mochawesome-reporter/plugin';
import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

// @ts-expect-error
const { default: mochawesomePlugin } = plugin;
const baseUrl = process.env.VITE_BASE_URL;
const isLocalTestingEnv = process.env.VITE_ENV === 'local-testing';
const reporterConfig = {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Google dev Fest Catania',
    reportFilename: 'google-dev-fest-[datetime]',
    reportTitle: 'Google dev Fest Catania E2E tests report',
    timestamp: 'dd/mm/yy HH/MM ',
    showSkipped: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
};

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    baseUrl,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      if (isLocalTestingEnv) {
        mochawesomePlugin(on);
        codeCoverage(on, config);
      }
      return config;
    },
  },
  ...reporterConfig,
});
