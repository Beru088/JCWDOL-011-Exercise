// soal 02
class Product {
  static productList = []

  constructor() {
    this.name = ""
    this.price = 0
  }

  set setProductName(name) {
    this.name = name
  }

  get getProductName() {
    return this.name
  }

  set setPrice(price) {
    this.price = price
  }

  get getPrice() {
    return this.price
  }
}

class Transaction {
  constructor() {
    this.total = 0
    this.cart = []
  }

  addToCart(productName, qty) {
    for (let item of Product.productList) {
      if (productName === item.name) {
        let totalPrice = item.price * qty
        let itemOrder = {
          ...item,
          quantity: qty,
          total: totalPrice,
        }
        this.total += totalPrice
        this.cart.push(itemOrder)
      }
    }
  }

  showTotal() {
    return this.total
  }

  checkOutMethod() {
    Object.freeze(this)
    return this
  }
}

// ---------Penambahan produk ke class Product---------

let product1 = new Product()
product1.setProductName = "Logitech Pro Superlight"
product1.setPrice = 2_400_000

let product2 = new Product()
product2.setProductName = "Razer Deathadder V3 Pro"
product2.setPrice = 3_000_000

Product.productList.push(product1, product2)
console.log(Product.productList)

// ------------Melakukan Transaksi pertama------------

let transaction1 = new Transaction()
transaction1.addToCart("Logitech Pro Superlight", 1)
transaction1.addToCart("Razer Deathadder V3 Pro", 1)
console.log(transaction1.checkOutMethod())

// ------------Melakukan Transaksi kedua--------------

let transaction2 = new Transaction()
transaction2.addToCart("Razer Deathadder V3 Pro", 12)
console.log(transaction2.showTotal())

console.log(transaction2.checkOutMethod())
