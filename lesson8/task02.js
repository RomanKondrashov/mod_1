'use strict';


const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) =>  {
    let result = 0;
    for (const elem of arr) result += elem;
    return result /= arr.length;
}

console.log(`--------------------------------------------------------------------------`);
console.log(`Исходный массив: ${allСashbox}`);
console.log(`Среднее значение: ${getAverageValue(allСashbox)}`);
