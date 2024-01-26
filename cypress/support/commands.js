Cypress.Commands.add('fillSignupFormAndSubmit', (email, password) => {
  cy.visit('/signup')
  cy.get('#email').type(email)
  cy.get('#password').type(password, { log: false })
  cy.get('#confirmPassword').type(password, { log: false })
  cy.contains('button', 'Signup').click()
  cy.get('#confirmationCode').should('be.visible')
  cy.mailosaurGetMessage(Cypress.env('MAILOSAUR_SERVER_ID'), {
    sentTo: email
  }).then(message => {
    const confirmationCode = message.html.body.match(/\d{6}/)[0]
    cy.get('#confirmationCode').type(`${confirmationCode}{enter}`)
  })
})

Cypress.Commands.add('guiLogin', (email = Cypress.env('USER_EMAIL'), password = Cypress.env('USER_PASSWORD') ) => {
  cy.visit('/login')
  cy.get('#email').type(email)
  cy.get('#password').type(password, { log: false })
  cy.contains('button', 'Login').click()
})

Cypress.Commands.add('sessionLogin', (username = Cypress.env('USER_EMAIL'), password = Cypress.env('USER_PASSWORD')) => {
  const login = () => cy.guiLogin(username, password)
  cy.session(username, login)
})

