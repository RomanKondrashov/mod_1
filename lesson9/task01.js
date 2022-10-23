'use strict';

const getRandomArray = (count) => {
    const resArray = [];
    for (let i = 0; i <= count; i++) resArray.push(Math.round(Math.random() * 100));
    return resArray;
}

console.log(`Задание 1:`);
console.log(`Массив из 10 чисел (1): ${getRandomArray(10)}`);
console.log(`Массив из 10 чисел (2): ${getRandomArray(10)}`);
console.log(`Массив из 15 чисел: ${getRandomArray(15)}`);
console.log(`Массив из 25 чисел: ${getRandomArray(25)}`);