/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    before(function(){
        cy.fixture('example').then(function(data) {
            // this.data=data;
            globalThis.data = data;
        })
    })

    beforeEach(() =>{
        cy.visit(Cypress.env("webDriverUni_homepage") + "/Contact-Us/contactus.html")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        // Customa code added on command page 
        cy.webDriverUni_Contact_FormSubmission(Cypress.env('first_name'),data.last_name,data.email,"How can I learn Cypress?",'h1','Thank You for your Message!');


    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.webDriverUni_Contact_FormSubmission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Thank You for your Message!');

    });
})