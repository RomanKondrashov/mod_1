'use strict';

const getNumberToArr = () => Math.round(Math.random() * 10);

const calculateArraySum = (arr) => {
  let sum = 0;
  for (const elem of arr) sum += elem;
  return sum;
};

const addToArray = (arr) => {
  arr.push(getNumberToArr());
  if (calculateArraySum(arr) < 50) {
    addToArray(arr);
  } else {
    console.log(`Итоговый массив ${arr}`);
    console.log(`Сумма элементов ${calculateArraySum(arr)}`);
  }
};

console.log(`Задание 2, дополнение массива`);
addToArray([]);
