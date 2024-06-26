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

class DateValidity {
  constructor(date) {
    this.date = date; 
  }

  formatDate() {
    const year = this.date.getFullYear();
    const mouth = (this.date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = this.date.getDate().toString().padStart(2, '0');
  
    return `${year}-${mouth}-${day}`;
  }

  generateDate() {
    return {
      date: this.formatDate()
    };
  }

}

export default DateValidity; 
export {ProductFactory};