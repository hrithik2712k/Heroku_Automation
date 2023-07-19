const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


async function setupNodeEvents(on, config) {
  // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on);
  allureWriter(on, config);
  return config
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for HTML reports
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/Integration/Example/*.js"
  },
});
