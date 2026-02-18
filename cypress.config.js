const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file, projectRoot) {
  const pathToConfigFile = path.join(
    projectRoot,
    'cypress',
    'config',
    `${file}.json`
  );

  if(!fs.existsSync(pathToConfigFile)){
    console.log("No custom config file found");
    return{};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  allowCypressEnv: true,
  projectId: "bprn3n",
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // accept a environment value or use development by default
      const file = config.env.environment || ''

      return getConfigurationByFile(file, config.projectRoot)
    },
    specPattern: "cypress/e2e/**/**/*.{cy.js,js,jsx,ts,tsx,feature}",
    // excludeSpecPattern:"cypress/e2e/trial/.js",
    baseUrl:"http://www.webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    // allowCypressEnv: true,
    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: 'cypress/screenshots',
    // video: true,
    // viewportHeight: 1080,
    // viewportWidth:1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
    configFile: 'reporter-config.json',
  },
    env:{
      first_name: "James",
      webDriverUni_homepage:"http://www.webdriveruniversity.com"
    }

  },
});
