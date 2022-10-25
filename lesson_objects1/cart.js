'use strict';

const cart = {
    items : [],
    totalPrice : 0,
    count : 0,

    getTotalPrice() {
        console.log(`В корзине товаров на сумму ${this.totalPrice}`);
    },
    add(itemName, itemPrice, itemCount = 1){
        const newItem = {
            name: itemName,
            price: parseFloat(itemPrice),
            count: parseInt(itemCount),
        };
        this.items.push(newItem);
        this.increaseCount(itemCount);
        this.calculateItemPrice(newItem.price*newItem.count);
        

    },
    increaseCount(countAdd){
        return this.count += countAdd;
    },
    calculateItemPrice(addPrice){
        this.totalPrice += addPrice;
    },
    clear(){
        this.items.length = 0;
        this.totalPrice = 0;
        this.count = 0;
    },
    print(){
        console.log(JSON.stringify(this));
        this.getTotalPrice();
    },
}


cart.add('Носки', 300, 2);
cart.print();
cart.add('Футболка', 100, 1);
cart.print();
cart.add('Штаны', 1000, 2);
cart.print();
console.log(`Очистим корзину`);
cart.clear();
cart.print();

