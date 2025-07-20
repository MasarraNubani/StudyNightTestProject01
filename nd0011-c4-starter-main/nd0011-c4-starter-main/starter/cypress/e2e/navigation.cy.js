describe('Navigation Menu', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
    });
  
    it('should navigate to Home page', () => {
      cy.get('#homePage').click();
      cy.contains('Home').should('exist');
    });
  
    it('should navigate to About page', () => {
      cy.get('#aboutPage').click();
      cy.contains('About').should('exist');
    });
  
    it('should navigate to Card Sets page', () => {
      cy.get('#cardSetPage').click();
      cy.contains('Card Sets').should('exist');
    });
  });
  