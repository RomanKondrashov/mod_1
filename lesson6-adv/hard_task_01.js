'use strict';

    const myNumberX = 72;
    const myNumberY = 21;

    const getNOD = (x , y) => {
        if (y > x) return getNOD(y, x);
        if (!y) return x;
        return getNOD(y, x % y);
    }

    console.log (`Задание 5 (НОД) чисел ${myNumberX} и ${myNumberY}`);
    console.log (getNOD(myNumberX, myNumberY));
    console.log (`=====================================`);
  