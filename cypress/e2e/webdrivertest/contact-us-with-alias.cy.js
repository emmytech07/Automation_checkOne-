/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    before(function(){
        cy.fixture('userDetails').as('user')
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        //cy.get('#contact-us').click({force: true})

        cy.get('@user').then((user)=>{
            cy.get('[name="first_name"]').type(user.first_name);
            cy.get('[name="last_name"]').type(user.last_name);
            cy.get('[name="email"]').type(user.email)
    })
        
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})