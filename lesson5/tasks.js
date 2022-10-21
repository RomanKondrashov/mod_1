'use strict';

    /* Дождь */

    const rain = Math.round(Math.random());

    console.log(`==========================`);
    console.log(`Старт работы tasks.js (задача про дождь)`);

    if (rain){
        console.log(`Пошёл дождь. Возьмите зонт!`);
    }else{
        console.log(`Дождя нет!`);  
    }

    console.log(`Конец работы tasks.js (задача про дождь)`);
    console.log(`==========================`);

    /* Баллы */

    const mathRes = parseInt(prompt(`Введите количество баллов по математике`)); 
    const langRes = parseInt(prompt(`Введите количество баллов по русскому языку`)); 
    const infoRes = parseInt(prompt(`Введите количество баллов по информатике`));

    const ballGoal = 265; //проходной балл
    
    console.log(`Старт работы tasks.js (задача про баллы)`);
    if (mathRes+langRes+infoRes >= ballGoal){
        console.log(`Поздравляем! Вы поступили на бюджет!`);
    }
    console.log(`Конец работы tasks.js (задача про баллы)`);
    console.log(`==========================`);

    /* Банкомат*/

    const moneyGet = parseInt(prompt(`Введите сумму`)); 

    const moneyMin = 100; //минимальная купюра

    if (moneyGet % moneyMin){
        console.log(`Банкомат не может выдать сумму`);
    }else{
        console.log(`Банкомат может выдать сумму`);
    }