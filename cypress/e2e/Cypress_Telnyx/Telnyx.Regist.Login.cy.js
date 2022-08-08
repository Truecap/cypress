describe("Telnyx only Registration and Login", () => {
  beforeEach(function () {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then((body) => {
      if (
        body.find('[aria-label="close and deny"]~div>div>button').length > 0
      ) {
        cy.get('[aria-label="close and deny"]~div>div>button').click();
      }
    });
  });

  it("Sign Up", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get('li [class*="sc-5d3a275a-0"] a').click();
    cy.get('[id="email"]').type("testsne13@gmail.com");
    cy.get('[id="full_name"]').type("Test");
    cy.get('[id="password"]').type("Test1234test!");
    cy.get('[class="sc-26f7330-5 lBxvj"]>div [fill="white"]').click();
    cy.get('[type="submit"]').click();
    cy.get('[id="email_error"]', { timeout: 10000 }).should("be.visible");
  });

  it("Log In", () => {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get('[id="dialogAudio"] +a +a').click({ force: true });
    cy.get('form>div>div input[name="email"]').type("testsne13@gmail.com");
    cy.get('form>div>div input[name="password"]').type("Test1234test!");
    cy.get('button[class*="LoginForm__LoginButton"]').click();
    cy.get('[class*="tx-27OtCC"]', { timeout: 10000 }).should("be.visible");
  });
});
