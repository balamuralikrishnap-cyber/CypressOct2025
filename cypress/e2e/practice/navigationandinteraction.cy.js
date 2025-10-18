describe("page navigation",()=>
{
    it("page navigation test",()=>
    {
        cy.log("test")
        cy.visit("https://example.cypress.io")
        cy.get(".dropdown-toggle").click();
        cy.get(".dropdown-menu li").each(
            ($el)=>
            {
                  cy.log($el.text());      // log text to Cypress command log
                  console.log($el.text()); // also log to browser console
            }
        )
    })
})