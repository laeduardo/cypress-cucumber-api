const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://sso-qa1.clevercorporate.com/account/login",
    env: { 
      hideXhr: true,
      snapshotOnly: true,
      hideCredentials: false 
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: [
      "cypress/e2e/step_definitions/*.feature",
      "cypress/api/*.js"
    ]
  },
});