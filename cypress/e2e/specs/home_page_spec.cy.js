describe('home page', () => {
    it('The h1 contains the correct text', () => {
        cy.visit("http://amazon.in")
        cy.get("title")
    })
})