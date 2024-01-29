const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: 'fiq5ug',
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 30000,
    setupNodeEvents() {
    },
  },
})
