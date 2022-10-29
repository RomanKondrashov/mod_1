'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    switch (promocode) {
      case 'METHED':
        this.discount = 15;
        break;
      case 'NEWYEAR':
        this.discount = 21;
        break;
      default:
        this.discount = 0;
    }
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
    if (this.discount) calcPrice -= calcPrice / 100 * (this.discount);
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
console.log(`Установим промокод METHED`);
cart.setDiscount = 'METHED';
cart.print();
console.log(`Установим промокод NEWYEAR`);
cart.setDiscount = 'NEWYEAR';
cart.print();
console.log(`Установим промокод NOPROMO`);
cart.setDiscount = 'NOPROMO';
cart.print();
console.log(`Очистим корзину`);
cart.clear();
cart.print();
console.log(`=================================`);
