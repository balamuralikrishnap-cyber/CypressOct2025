describe('Checkbox Test with Results Verification', () => {
  it('checks checkboxes and verifies results', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');

    // Step 1: Verify first checkbox is unchecked
    cy.xpath('//form[@id="checkboxes"]/input[1]')
      .should('not.be.checked');

    // Step 2: Check the first checkbox
    cy.xpath('//form[@id="checkboxes"]/input[1]').check();

    // Step 3: Verify first checkbox is now checked
    cy.xpath('//form[@id="checkboxes"]/input[1]')
      .should('be.checked')
      .then(() => {
        // Log result in Cypress console
        cy.log('✅ First checkbox is checked');
      });

    // Step 4: Verify second checkbox state
    cy.xpath('//form[@id="checkboxes"]/input[2]').should('be.checked')
      .then(() => {
        cy.log('✅ Second checkbox was already checked');
      });
  });
});
