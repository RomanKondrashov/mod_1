'use strict';


const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix  = (arr, prefix) =>  {
    const newArray = [];
    for (const elem of arr) newArray.push(`${prefix} ${elem}`);
    return newArray;
}

console.log(`--------------------------------------------------------------------------`);
console.log(`Исходный массив: ${names}`);
console.log(`Измененное значение: ${addPrefix(names, 'Mr')}`);
