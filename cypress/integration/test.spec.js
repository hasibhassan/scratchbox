describe('e2eTestScratchbox', () => {
  it('Auth flow', () => {
    cy.visit('/user')

    // Create Account
    cy.signup('admin@admin.com', 'admin123')

    cy.wait(8000)

    cy.get('nav').contains('Sign Out').click()

    // Sign out of account
    cy.contains('Sign Out').click()

    cy.wait(8000)

    cy.visit('/user')

    // Log back in
    cy.login('admin@admin.com', 'admin123')
  })
})
