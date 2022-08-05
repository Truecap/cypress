describe('Telnyx', () => {

    // it('Sign Up', () => {
    //     cy.visit('https://telnyx.com');
    //     cy.viewport(1920, 1080);
    //     // cy.get('[aria-label="close and deny"]~div>div>button').then(($el) => {
    //     //     Cypress.dom.isVisible($el) // true
    //     //   });
    //     // if( Cypress.dom.isVisible($el).click());

    //     //cy.get('[aria-label="close and deny"]~div>div>button').click();

    //     cy.get('li [class*="sc-5d3a275a-0"] a').click();
    //     cy.get('[id="email"]').type('testsne13@gmail.com');
    //     cy.get('[id="full_name"]').type('Test');
    //     cy.get('[id="password"]').type('Test1234test!');
    //     cy.get('[class="sc-26f7330-5 lBxvj"]>div [fill="white"]').click();
    //     cy.get('[type="submit"]').click();
    //     cy.get('[id="email_error"]', {timeout:6000}).should('be.visible');

    // });

    it('Log In', () => {
        cy.visit('https://telnyx.com');
        //cy.viewport(1920, 1080);
        //cy.get('[aria-label="close and deny"]~div>div>button').click();
        //cy.get('//header//div//div//div/a[@href="https://portal.telnyx.com/"][1]').click();
        cy.get('[id="dialogAudio"] +a +a').click({ force: true });
        cy.get('form>div>div input[name="email"]').type('testsne13@gmail.com');
        cy.get('form>div>div input[name="password"]').type('Test1234test!');
        cy.get('button[class*="LoginForm__LoginButton"]').click();
        //cy.wait(5000)
        cy.get('[class*="tx-27OtCC"]', {timeout:7000}).should('be.visible');


        cy.get('[class*=" justify-content-center"]').click();
        cy.get('[href="/#/app/account/general"]').click();
        cy.get('[name="last_name"]').clear().type('Test11');
        cy.get('[name="business_name"]').clear().type('TestCompany');
        cy.get('[placeholder="540-555-7474"]').clear().type('7777777');
         cy.xpath('(//*[@class=" css-o8iqki"])[1]').click();
        cy.xpath("//*[text()= \"I'm a Team Member\"]").click();  
        cy.xpath('(//*[text() = "Save Changes"])[1]').click();
        cy.get('[class="ng-binding ng-scope"]').should('be.visible');   


        // it.only('Add number to cart', () => {
        //     cy.visit('https://telnyx.com');
        //     cy.get('[id="dialogAudio"] +a +a').click({ force: true });  //<== клик по логину потом убрать
        //     cy.xpath('(//*[text() = "Numbers"])[2]').click();
        //     cy.get('[class=" css-df19ax-placeholder"]').select('SMS').invoke('val').should('eq', 'SMS');

  
        // })
    
    
            // it('Find information about Telnyx from support center', ()=> {
            //     cy.visit('https://telnyx.com');
            //     cy.viewport(1920, 1080);
            //     cy.xpath('(//* [text ()= "Support Center "])[2]').click();
            //     cy.get('.search__input').type('Telnyx').type("{enter}");
            // })
    
    
    });


    // it('Edit your profile', () => {
       
    //     cy.get('[class*="tx-27OtCC"]').focus();
    //     cy.get('[href="/#/app/account/general"]').click();

            
    //     })


 });
