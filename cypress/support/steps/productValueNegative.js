import {Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";
import BaseUrl from "../utils/acessUrl";
import productPage from "../pages/productPage";

const baseUrl = new BaseUrl(Cypress.env('baseUrl'));

Given("que o usuario esteja na tela de cadastro de produto", () => {
  baseUrl.accesarUrl();
});

When("o usuario preencher os dados de cadastro do produto", () => {
  productPage.writeName();
  productPage.writeValidity();
});

When("preencher campo preco com um valor negativo", () => {
  productPage.writePriceNegative();
});

When("adicionar produto", () => {
  productPage.clickToAdd();
});

Then("o usuario deve visualizar a mensagem {string} abaixo do campo preco", (messagesRequired) => {
  productPage.getText(messagesRequired).should('be.visible')
  cy.screenshot();
});

When("o produto nao deve ser adicionado a lista", () => {
  productPage.getListProducts().then(function (index) {
    expect(index.length).to.eql(1)
  });
  cy.screenshot();
});
