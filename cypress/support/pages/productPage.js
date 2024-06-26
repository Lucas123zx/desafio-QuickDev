import ProductElements from "../components/singUpElements";
import {ProductFactory} from "../utils/produtcs";
import DateValidity from "../utils/dateValidity"; 

const randomProduct = ProductFactory.createRandomProduct();
const dateValidity = new DateValidity(new Date("12-11-2021"));

class ProdutcPage {

  acessUrl() {
    cy.visit("/")
  }

  writeName() {
    cy.get(ProductElements.inputNameProduct()).type(randomProduct.getName())
  }

  writePriceNegative() {
    let price = randomProduct.getPrice();
    let priceNegative = -price
    cy.get(ProductElements.inputPrice()).type(priceNegative.toString())
  }
  
  writeValidity() {
    cy.get(ProductElements.inputValidity()).type(dateValidity.generateDate().date)
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

export default new ProdutcPage();