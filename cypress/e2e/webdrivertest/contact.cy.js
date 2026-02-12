import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_US_PO";
/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {

    before(function(){
        cy.fixture('example').then(function(data) {
            // this.data=data;
            globalThis.data = data;
        })
    })

    beforeEach(() =>{
        // POM
        const homepage_PO = new HomePage_PO();
        homepage_PO.visitHomePage();
        homepage_PO.clickOn_ContactUs_Button()
        
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');

        // Using POM
        const contact_us_PO = new Contact_Us_PO()
        contact_us_PO.contactForm_Submission(Cypress.env('first_name'),data.last_name,data.email,"How can I learn Cypress?",'h1','Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // Using Custom Command 
        cy.webDriverUni_Contact_FormSubmission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Thank You for your Message!');

    });
})