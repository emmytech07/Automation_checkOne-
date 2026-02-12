class ContactUs_PO {
   contactForm_Submission(firstName, lastName, email,comment, $selector, textToLocate){
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(data.email)
    cy.get('textarea.feedback-input').type(comment)
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, {timeout: 30000})
    cy.screenshot();
    cy.screenshot("Take submission pictures")
   }
}
export default ContactUs_PO;