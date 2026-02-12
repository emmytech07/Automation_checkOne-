class HomePage_PO {
    visitHomePage(){
        cy.visit(cy.env("webDriverUni_homepage"))
    }
}
export default HomePage_PO;