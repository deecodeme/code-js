describe('Teste do teste', () => {
    it("Test todos", () => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('.completed').click();
        cy.get('[data-test=new-todo]').click();
        cy.get('[data-test=new-todo]').type('New Item1');
        cy.get('[data-test=new-todo]').type('New Item 2');
        cy.get('.filters > li:nth-child(2) > a').click();
        cy.get('.filters > li:nth-child(3) > a').click();
    })
}
)