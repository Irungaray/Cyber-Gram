describe('First test', function () {
  it('Should work', function () {
    expect(true).to.equal(true)
  })
})

describe('Pets', function () {
  it('Should work', function () {
    cy.visit('/')
  })

  it('Navigate to a category and see photos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navigate to home using the navbar', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Not registered users should see register form', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})