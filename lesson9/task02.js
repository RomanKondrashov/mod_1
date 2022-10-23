'use strict';

const getRandomArrayV2 = (count, min, max ) => {
    const resArray = [];
    for (let i = 0; i <= count; i++) resArray.push(Math.round(Math.random() * (max - min) + min));
    return resArray;
}

console.log(`------------------------------------------------------------------`);
console.log(`Задание 2:`);
console.log(`Массив из 10 чисел от 0 до 10: ${getRandomArrayV2(10, 0, 10)}`);
console.log(`Массив из 10 чисел от -10 до 10: ${getRandomArrayV2(10, -10, 10)}`);
console.log(`Массив из 10 чисел от -10 до 0: ${getRandomArrayV2(10, -10, 0)}`);
console.log(`Массив из 10 чисел от -20 до -10 : ${getRandomArrayV2(10, -20, -10)}`);
console.log(`Массив из 10 чисел от 0 до -10 (неверный порядок минимума и максимума) : ${getRandomArrayV2(10, 0, -10)}`);