class Product {
  
  constructor(name, price, validity) {
    this.name = name;
    this.price = price;
    this.validity = validity;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  getValidity() {
    return this.validity;
  }
}

export default Product;