import ProductElements from "../components/singUpElements";
import ProductFactory from "../utils/generatePrducts";

class ProductPage extends ProductFactory {

  writeName() {
    cy.get(ProductElements.inputNameProduct()).type(ProductFactory.createRandomProduct().getName())
  }

  writePriceNegative() {
    let price = ProductFactory.createRandomProduct().getPrice();
    let priceNegative = -price
    cy.get(ProductElements.inputPrice()).type(priceNegative.toString())
  }
  
  writeValidity() {
    cy.get(ProductElements.inputValidity()).type(ProductFactory.createRandomProduct().getValidity())
  }

  clickToAdd() {
    cy.get(ProductElements.buttonToAdd()).click() 
  }

  getListProducts() {
    return cy.get(ProductElements.tableProducts()).invoke('contents')
  }

  getText(text) {
    return cy.xpath(ProductElements.msgText(text))
  }
  
}

export default new ProductPage();