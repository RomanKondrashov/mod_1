'use strict';

const generateNumber = (min, max, parity = '') =>{

    let newNumber = 0; 
    
    switch (parity){
        case 'even':{
            do {
                newNumber =  Math.round(Math.random() * (max - min) + min);
            } while (newNumber % 2);
            return newNumber;
        }
        break;
        case 'odd':{
            do {
                newNumber =  Math.round(Math.random() * (max - min) + min);
            } while (!(newNumber % 2));
            return newNumber;
        }
        break;
        default:
            return Math.round(Math.random() * (max - min) + min);
    }

}



const getRandomArrayV3 = (count, min, max, parity = '' ) => {
    const resArray = [];
    for (let i = 0; i <= count; i++) {
        resArray.push(generateNumber(min, max, parity))
    }
    return resArray;
}

console.log(`------------------------------------------------------------------`);
console.log(`Задание 3:`);
console.log(`Массив из 10 чисел от 0 до 10 четные: ${getRandomArrayV3(10, 0, 10, "even")}`);
console.log(`Массив из 10 чисел от 0 до 10 нечетные: ${getRandomArrayV3(10, 0, 10, "odd")}`);
console.log(`Массив из 10 чисел от 0 до 10 без параметра: ${getRandomArrayV3(10, 0, 10)}`);