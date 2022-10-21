'use strict';

    const myMoney = parseFloat(prompt(`Задание 1 (евро в рубли). Введите сумму покупки в Евро`)); 

    const convertEurToRub = (myMoney) => {
        const eurToUsd = 1.2;
        const usdToRub = 73;

        if (Number.isNaN(myMoney)){
            return `Введено неверное значение`;
        }

        return myMoney * eurToUsd * usdToRub;
    }

    console.log (`Задание 1 (евро в рубли)`);
    console.log (convertEurToRub(myMoney));
    console.log (`=====================================`);
 