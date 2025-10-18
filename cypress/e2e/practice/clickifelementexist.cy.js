describe("page navigation",()=>
{
    it("page navigation test",()=>
    {
       cy.visit('https://the-internet.herokuapp.com/checkboxes');

        cy.get("#checkboxes input").each(($checkbox, index) => {
  cy.wrap($checkbox)
    .check()
    .then(($el) => {
      const isChecked = $el.is(':checked');        // Now reads after check
      cy.log(`Checkbox ${index + 1} checked? ${isChecked}`);
      console.log(`Checkbox ${index + 1} checked? ${isChecked}`);
    });
});

    })

})