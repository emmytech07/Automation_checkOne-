const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file, projectRoot) {
  const pathToConfigFile = path.join(
    projectRoot,
    "cypress",
    "config",
    `${file}.json`
  );

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};
  }

  // Use readJsonSync instead of async readJson
  return fs.readJsonSync(pathToConfigFile);
}

module.exports = defineConfig({
  allowCypressEnv: true,
  projectId: "bprn3n",
  e2e: {
    setupNodeEvents(on, config) {
      // 1. Load environment config synchronously
      const file = config.env.ENVIRONMENT_NAME || process.env.CYPRESS_ENVIRONMENT_NAME || 'staging';

      const envConfig = file ? getConfigurationByFile(file, config.projectRoot) : {};

      // 2. Merge loaded config with Cypress config
      const finalConfig = { ...config, ...envConfig };

      // 3. Initialize grep plugin
      const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin");
      cypressGrepPlugin(finalConfig);

      // 4. Return merged config
      return finalConfig;
    },
    specPattern: "cypress/e2e/**/**/*.{cy.js,js,jsx,ts,tsx,feature}",
    baseUrl: "http://www.webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: "cypress/screenshots",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    env: {
      first_name: "James",
      webDriverUni_homepage: "http://www.webdriveruniversity.com",
    },
  },
});
