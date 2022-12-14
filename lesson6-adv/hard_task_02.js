'use strict';

    const myNumberToMinX = parseFloat(prompt(`Задание 6 (меньшее из двух чисел). Введите число 1`)); 
    const myNumberToMinY = parseFloat(prompt(`Задание 6 (меньшее из двух чисел). Введите число 2`)); 

    const getMin = (...arr) => {

        // заводим переменную, в ней будет храниться иднекс меньшего числа
        let indexResult = '';
        
        // проверям что введены подходящие значения
        if (Number.isNaN(arr[0]) || Number.isNaN(arr[1])){
            return `Введено неверное значение`;
        }

        //подсчитываем разницу между числами и переводим в строку
        //получается что у нас будет либо строка у которой первый символ "-" (если первое число больше второго),
        //либо символ "-" не встретится в строке вообще
        // получается в данном случае мы получаем в результате следующие строки либо -1, либо 0
        indexResult = (arr[1] - arr[0]).toString();

        //нумерация массива начинается с "0", а не с "-1", поэтому к результату прошлой строки надо добавить 1
        //по итогу мы получим индекс меньшего числа из введенных
        indexResult = arr[indexResult.indexOf('-') + 1];

        return indexResult;
    }

    console.log (`Задание 6 (меньшее из двух чисел) чисел ${myNumberToMinX} и ${myNumberToMinY}`);
    console.log (`Меньшее число: ${getMin(myNumberToMinX, myNumberToMinY)}`);
    console.log (`=====================================`);
  