const listProducts = ['Banana', 'Abacaxi', 'Maça', 'Limão', 'Laranaja', 'Tangerina', 'Kiwi', 'Mamão']

class Product {
  
  constructor() {
    let selectProduct = Math.floor(Math.random() * listProducts.length);
    this.name = listProducts[selectProduct];
    this.price = Math.floor(Math.random() * 100);
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

export default Product;
