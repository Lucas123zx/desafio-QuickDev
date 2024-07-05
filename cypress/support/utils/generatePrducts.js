import Product from "./produtcs";
import DateValidity from "../utils/dateValidity"; 

const dateValidity = new DateValidity(new Date("12-11-2021"));

const listProducts = ['Banana', 'Abacaxi', 'Maça', 'Limão', 'Laranaja', 'Tangerina', 'Kiwi', 'Mamão']

class ProductFactory {
  static createRandomProduct() {
    const selectProduct = Math.floor(Math.random() * listProducts.length);
    const name = listProducts[selectProduct];
    const price = Math.floor(Math.random() * 100);
    const validity = dateValidity.formatDate();
    return new Product(name, price, validity);
  }
}

export default ProductFactory;