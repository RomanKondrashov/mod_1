'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set setWidth(val) {
    if (!Number.isNaN(parseInt(val))) {
      this.width = val;
    }
  },
  set setHeight(val) {
    if (!Number.isNaN(parseInt(val))) {
      this.height = val;
    }
  },
  get getP() {
    return `${(this.width + this.height) * 2} см`;
  },
  get getS() {
    return `${this.width * this.height} см `;
  },
};

console.log(`Задание 3, квадрат`);
console.log(rectangle.getP);
console.log(rectangle.getS);
rectangle.setWidth = 10;
rectangle.setHeight = 2;
console.log(rectangle.getP);
console.log(rectangle.getS);
