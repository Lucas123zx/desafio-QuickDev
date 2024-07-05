import Product from "./produtcs";
import DateValidity from "../utils/dateValidity"; 


const listProducts = ['Banana', 'Abacaxi', 'Maça', 'Limão', 'Laranaja', 'Tangerina', 'Kiwi', 'Mamão'];
class ProductFactory extends DateValidity {
  static createRandomProduct() {
    const selectProduct = Math.floor(Math.random() * listProducts.length);
    const name = listProducts[selectProduct];
    const price = Math.floor(Math.random() * 100);
    const validity = DateValidity.formatDate(new Date("12-11-2021"));
    return new Product(name, price, validity);
  };
}

export default ProductFactory;