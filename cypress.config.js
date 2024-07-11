const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  api: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    specPattern: ["cypress/api/*.js"]
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    env: { 
      hideXhr: true,
      snapshotOnly: true,
      hideCredentials: false 
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: ["cypress/e2e/step_definitions/*.feature"]
  },
});