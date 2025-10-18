it("auto suggestion",()=>
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#autocomplete").type("india")
    cy.get(".ui-menu-item div").each(($ele)=>
    {
        const text1=$ele.text().trim()
        if(text1=="British Indian Ocean Territory")
        {
            cy.wrap($ele).click()
        }
       
    }

    )
})