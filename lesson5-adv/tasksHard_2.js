'use strict';

    const salary = parseFloat(prompt(`Введите ваш доход в рублях`)); 

    const level1 = 15000; //первый уровень зарплаты
    const level2 = 50000; //второй уровень зарплаты

    const level0Tax = 0.13; //налог до первого уровня зарплаты
    const level1Tax = 0.2; //налог первого уровня зарплаты
    const level2Tax = 0.3; //налог второго уровня зарплаты

    let finalTax = 0;

    console.log(`==========================`);
    console.log(`Старт работы taskHard_1.js  (зарплата)`);

    if (salary <= level1){
        finalTax = salary*level0Tax;
    }

    if (salary > level1 && salary <= level2){

        finalTax = (salary - level1)*level1Tax;
    }

    if (salary > level2){

        finalTax = (salary - level2)*level2Tax;


    }

    console.log(`Итоговый налог ${finalTax}`);

    console.log(`Конец работы taskHard_1.js  (зарплата)`);
    console.log(`==========================`);
    