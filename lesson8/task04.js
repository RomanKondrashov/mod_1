'use strict';

const allСashboxArr = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];


const getAveragePriceGoods = (arr) =>{
    const tempArray = [];
    let result = 0;
    for (const elem of arr) tempArray.push(`${(elem[1]/elem[0]).toFixed(2)}`);
    for (const elem2 of tempArray) result += parseFloat(elem2);
    return (result /= tempArray.length).toFixed(2);
}

console.log(`--------------------------------------------------------------------------`);
console.log(`Среднее значение товаров в чеке: ${getAveragePriceGoods(allСashboxArr)}`);


