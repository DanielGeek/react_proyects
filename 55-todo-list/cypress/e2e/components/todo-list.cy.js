describe('Todo List', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('adds a todo', () => {
      cy.get('.todo-input')
        .type('Test Todo')
        .should('have.value', 'Test Todo');
  
      cy.get('.todo-button')
        .click();
  
      cy.get('.todo-list')
        .should('contain', 'Test Todo');
    });
  
    it('removes a todo', () => {
      cy.get('.todo-input')
        .type('Test Todo')
        .should('have.value', 'Test Todo');
  
      cy.get('.todo-button')
        .click();
  
      cy.get('.remove-button')
        .first()
        .click();
  
      cy.get('.todo-list')
        .should('not.contain', 'Test Todo');
    });
  });
  