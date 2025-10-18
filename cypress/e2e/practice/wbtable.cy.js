it("webtable",()=>
{
    cy.visit("https://the-internet.herokuapp.com/tables")
    cy.get("#table1 tbody tr").each(($row,i)=>{
       cy.wrap($row).find('td').each(($col,j)=>
       {
            const coltext=$col.text().trim()
            if(coltext=="Smith")
            {
                 cy.wrap($row).find("a[href='#edit']").click();
                 cy.wait(10000)
            }
            cy.log(coltext)
       }

       )
    })
})