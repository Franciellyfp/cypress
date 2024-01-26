import { faker } from '@faker-js/faker/locale/en'

describe('CRUD', () => {
  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.sessionLogin()

    cy.visit('/notes/new')
    cy.get('#content').type(noteDescription)
    cy.contains('button', 'Create').click()

    cy.contains('.list-group-item', noteDescription).should('be.visible').click()

    const updatedNoteDescription = faker.lorem.words(4)

    cy.get('#content').as('contentField').clear()
    cy.get('@contentField').type(updatedNoteDescription)
    cy.contains('button', 'Save').click()

    cy.contains('.list-group-item', noteDescription).should('not.exist')
    cy.contains('.list-group-item', updatedNoteDescription).should('be.visible').click()
    cy.contains('button', 'Delete').click()

    cy.get('.list-group-item').its('length').should('be.at.least', 1)
    cy.contains('.list-group-item', updatedNoteDescription).should('not.exist')
  })
})