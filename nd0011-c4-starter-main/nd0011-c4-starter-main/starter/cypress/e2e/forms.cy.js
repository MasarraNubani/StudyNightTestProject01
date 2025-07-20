describe('Create Set Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
      cy.get('#cardSetPage').click(); // انتقلي لصفحة Card Sets
    });
  
    it('shows error when submitted with empty input', () => {
      cy.get('[data-cy="create-set-btn"]').click();
      cy.get('[data-cy="submit-btn"]').click();
      cy.contains('TITLE CANNOT BE EMPTY').should('exist'); // عدلت السطر هنا
    });
  
    it('submits the form with valid input', () => {
      cy.get('[data-cy="create-set-btn"]').click();
      cy.get('[data-cy="input-set-name"]').type('Test Set');
      cy.get('[data-cy="submit-btn"]').click();
      cy.contains('Test Set').should('exist');
    });
  });
  