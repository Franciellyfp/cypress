import { faker } from '@faker-js/faker/locale/en'

describe('Scenarios where authentication is a pre-condition', () => {
  beforeEach(() => {
    cy.sessionLogin()
  })

  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)

    const updatedNoteDescription = faker.lorem.words(4)

    cy.editNote(noteDescription, updatedNoteDescription)

    cy.deleteNote(updatedNoteDescription)
  })

  it.only('successfully submits the settings form', () => {
    cy.fillSettingsFormAndSubmit()
  })
})
