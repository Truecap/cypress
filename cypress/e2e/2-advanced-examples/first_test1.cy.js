describe('Testing something on Google', () => {

    it('I can search something', () => {
        
        cy.visit('https://google.com');
        cy.get("Input[class='gLFyf gsfi']")
        .type('Что-то')
        .type('{enter}');
    

    });
});