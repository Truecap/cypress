describe('Ttest for select', () =>{

    it('Should show me how select works', () => {
        cy.visit('http://seleniumpractise.blogspot.com/');
        cy.get('[name="city"]').select('Pune', { force: true })

    })
})