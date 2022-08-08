it("Sign Up", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://telnyx.com");
  cy.get('li [class*="sc-5d3a275a-0"] a').click();
  cy.get('[id="email"]').type("testsne13@gmail.com");
  cy.get('[id="full_name"]').type("Test");
  cy.get('[id="password"]').type("Test1234test!");
  cy.get('[class="sc-26f7330-5 lBxvj"]>div [fill="white"]').click();
  cy.get('[type="submit"]').click();
  cy.get('[id="email_error"]', { timeout: 6000 }).should("be.visible");
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

describe("Telnyx", () => {
  beforeEach(function () {
    cy.viewport(1920, 1080);
    cy.visit("https://telnyx.com");
    cy.get("body").then((body) => {
      if (
        body.find('[aria-label="close and deny"]~div>div>button').length > 0
      ) {
        cy.get('[aria-label="close and deny"]~div>div>button').click();
      }
      cy.get('[id="dialogAudio"] +a +a').click({ force: true });
      cy.get("body").then((body) => {
        if (body.find('[class*="tx-27OtCC"]').length > 0) {
          cy.get('[class*="tx-27OtCC"]').should("be.visible");
        } else {
          cy.get('form>div>div input[name="email"]').type(
            "testsne13@gmail.com"
          );
          cy.get('form>div>div input[name="password"]').type("Test1234test!");
          cy.get('button[class*="LoginForm__LoginButton"]').click();
          cy.get('[class*="tx-27OtCC"]', { timeout: 10000 }).should(
            "be.visible"
          );
        }
      });
    });
  });

  const result = Math.random().toString(36).substring(2, 7);
  it("Edit your profile", () => {
    cy.get('[class*=" justify-content-center"]').click();
    cy.get('[href="/#/app/account/general"]').click();
    cy.get('[name="last_name"]').clear().type(result);
    cy.get('[name="business_name"]').clear().type("TestCompany");
    cy.get('[placeholder="540-555-7474"]').clear().type("7777777");
    cy.xpath('(//*[@class=" css-o8iqki"])[1]').click().type("{backspace}");
    cy.xpath('(//*[@class=" css-o8iqki"])[1]').click();
    cy.xpath('//*[text()= "I\'m a Team Member"]').click({ force: true });
    cy.xpath('(//*[text() = "Save Changes"])[1]').click();
    cy.get('[class="ng-binding ng-scope"]').should("be.visible");
  });

  it("Add number to cart", () => {
    cy.xpath('(//*[text()= "Numbers"])[2]').click();
    cy.xpath('(//*[@class=" css-o8iqki"])[2]').click().type("Chicago");
    cy.xpath('//*[text()="Chicago, IL (United States of America)"]').click();
    cy.get('[class=" css-1b7bufo"]').click();
    cy.xpath('//*[text()="SMS"]').click();
    cy.get('[class=" css-1b7bufo"]').click();
    cy.get("section>form>div~div~div>button").click();
    cy.xpath('((//*[text()="+1 872 234 8808"])[2]/..//button)[2]', {
      timeout: 10000,
    }).click();
    cy.get('[class*="Badge_badge"]').should("be.visible");
  });

  it("Add SIM to cart", () => {
    cy.xpath('(//*[text() = "Wireless"])[2]', { timeout: 10000 }).click();
    cy.get("[data-testid*=simCards]").click();
    cy.get(".QRlWQ").click({ force: true });
    cy.xpath('//*[text()="SIM Orders"]').should("be.visible");
  });

  it("Сlear the cart", () => {
    cy.xpath('//*[text()="Cart"]').click();
    cy.get("body").then((body) => {
      if (body.find('[class="tx-1GgKvv"]:nth-child(2n+1)').length > 0) {
        cy.get('[class="tx-1GgKvv"]:nth-child(2n+1)').click();
      } else {
      }
      cy.get("body").then((body) => {
        if (body.find('[class="tx-1jfdru"]>button').length > 0) {
          cy.get('[class="tx-1jfdru"]>button').click();
        } else {
        }
      });

      cy.get('[class="tx-Z1VR9ee"]').should("be.visible");
    });
  });

  it("Verify elements visibility", () => {
    cy.xpath('(//ul[@class="list-unstyled"])[3]//li').should("be.visible");
  });

  it("Verify elements clickability", () => {
    cy.get("react-side-bar [class*=icon-messaging]").click();
    cy.get('[class="tx-Z1bQ1vM"]').should("be.visible");
    cy.get("react-side-bar [class*=verify]").click();
    cy.get('[class="tx-uDeoA"]').should("be.visible");
    cy.get('react-side-bar [data-icon="video"]').click();
    cy.get('[class="mb-2 mr-2"]').should("be.visible");
    cy.get("react-side-bar [class*=reports]").click();
    cy.get('[class="tx-Z12BLcq"]').should("be.visible");
    cy.xpath('(//*[text()= "Google Verified Calls"])[4]').click();
    cy.get('[class*="LandingPage__TitleCu"]').should("be.visible");
    cy.xpath("//react-side-bar//ul/li[18]").click();
    cy.get('[class="tx-Z12BLcq"]').should("be.visible");
  });

  it("Finding Public Key", () => {
    cy.get('[class*=" justify-content-center"]').click();
    cy.get('[href="/#/app/account/general"]').click();
    cy.get('[e2e="PublicKey"]').click();
    cy.get('[value*="+dbDlKHD"]').should(
      "have.value",
      "+dbDlKHDZoJU0e+Gn3OdgAn9pr5v4K0SvYFRgTAtlvc="
    );
  });
});

it("Sign Out profile", () => {
  cy.get('[class*=" justify-content-center"]').click();
  cy.get('[class="tx-1Iv0kw"]').click();
  cy.get('[data-testid="login.signin.title"]').should("be.visible");
});
