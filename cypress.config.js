const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://todomvc.com/examples/react/dist/',
    viewportHeight:550,
    viewportWidth:660,
    experimentalStudio:false //enable studido
  },
});
