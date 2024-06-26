const listProducts = ['Banana', 'Abacaxi', 'Maça', 'Limão', 'Laranaja', 'Tangerina', 'Kiwi', 'Mamão']

class Product {
  
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ProductFactory {
  static createRandomProduct() {
    const selectProduct = Math.floor(Math.random() * listProducts.length);
    const name = listProducts[selectProduct];
    const price = Math.floor(Math.random() * 100);
    return new Product(name, price);
  }
}

export default Product; 
export {ProductFactory};