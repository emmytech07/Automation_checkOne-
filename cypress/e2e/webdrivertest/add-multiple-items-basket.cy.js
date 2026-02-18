/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
  before(function () {
    cy.fixture("product").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });
  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(element => {
      cy.addProductToBasket(element);
    });
  });
  
});
