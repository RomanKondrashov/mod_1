'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(itemName, itemPrice, itemCount = 1) {
    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      count: parseInt(itemCount),
    };
    this.items.push(newItem);
    this.increaseCount(itemCount);
  },
  increaseCount(countAdd) {
    return this.count += countAdd;
  },
  calculateItemPrice() {
    let calcPrice = 0;
    for (const i of this.items) {
      calcPrice += i.price * i.count;
    }
    return calcPrice;
  },
  clear() {
    this.items.length = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this));
    console.log(this.totalPrice);
  },
};


cart.add('Носки', 300, 2);
cart.print();
cart.add('Футболка', 100, 1);
cart.print();
cart.add('Штаны', 1000, 2);
cart.print();
console.log(`Очистим корзину`);

cart.clear();
cart.print();
console.log(`=================================`);
