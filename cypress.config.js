const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 800,
  e2e: {
    baseUrl: process.env.environment,
    env: { 
      hideXhr: true,
      snapshotOnly: true,
      hideCredentials: false 
    },
    experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      return Object.assign({}, config, {
        reporter: 'spec',
      })
    },
    specPattern: [
      "cypress/integration/**/*.spec.js",
      "cypress/api/**/*.spec.js",
    ],
  },
})