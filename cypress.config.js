const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "bprn3n",
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/**/*.{cy.js, js, jsx, ts, tsx, feature}",
    // excludeSpecPattern:"cypress/e2e/trial/.js",
    baseUrl:"http://www.webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    allowCypressEnv: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    screenshotsFolder: 'cypress/screenshots',
    // video: true,
    // viewportHeight: 1080,
    // viewportWidth:1920,
    env:{
      first_name: "James",
      webDriverUni_homepage:"http://www.webdriveruniversity.com"
    }

  },
});
