import { faker } from '@faker-js/faker/locale/en'

describe('CRUD', () => {
  it('CRUDs a note', () => {
    const noteDescription = faker.lorem.words(4)

    cy.sessionLogin()

    cy.createNote(noteDescription)

    const updatedNoteDescription = faker.lorem.words(4)

    cy.editNote(noteDescription, updatedNoteDescription)

    cy.deleteNote(updatedNoteDescription)
  })
})