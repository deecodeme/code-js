describe('Google Search Test', () => {

    beforeEach(() => {
      // Visit google.com
      cy.visit('https://www.google.com');
    });
  
    it('Records user searching for Apple', () => {
      // Handle the "Sign In To Google" popup if it appears
      cy.get('iframe', { timeout: 10000 }).then(($iframe) => {
        const $body = $iframe.contents().find('body');
      
        cy.wrap($body)
          .find('#gb > div > div.gb_sd.gb_6d.gb_Md > div.gb_Uc.gb_2d.gb_Vc.gb_Wc > div.gb_Kc.gb_3d.gb_4d > div.gb_8c.gb_9c > div > div.gb_Fd.gb_Ed > div > a.gb_Pd.gb_Nd.gb_le.gb_cd', { timeout: 10000 })
          .click({ force: true })
          .then(() => {
            cy.log('No Thanks button clicked');
          })
          .catch(() => {
            cy.log('No Thanks button not found');
          });
      }).catch(() => {cy.log('Sign In To Google popup not found');
    });

      cy.get()

      // Find the search input field and type "Apple"
      cy.get('input[name="q"]')
        .type('Apple{enter}');
  
      // Check if the search results page has loaded
      cy.get('#search').should('be.visible');
  
      // Verify that the search results contain the word "Apple"
      cy.get('#search').within(() => {
        cy.get('.g').should(($results) => {
          expect($results).to.contain.text('Apple');});
        });
      });
    
    });