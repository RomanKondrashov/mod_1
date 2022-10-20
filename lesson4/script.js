'use strict';


    const itemName = prompt(`Введите наименование товара`);
    const itemCount = parseInt(prompt(`Введите количество товара ${itemName}`)); //количество товара всегда целое (шт), поэтому parseInt
    const itemCategory = prompt(`Введите категорию товара`);
    const itemPriceRub = parseFloat(prompt(`Введите стоимость единицы товара`)); //стомость не обязательно целая, поэтому parseFloat

    console.log(`==========================`);
    console.log(`Старт работы script.js`);
    console.log(`==========================`);
    console.log(`Тип данных (количество товара): ${typeof itemCount}`);
    console.log(`Тип данных (цена товара): ${typeof itemPriceRub}`);

    console.log(`На складе ${itemCount} единиц(ы) товара "${itemName}" (из категории ${itemCategory}) на сумму ${itemCount*itemPriceRub} рублей`);
    console.log(`==========================`);
    console.log(`Конец работы script.js`);
    console.log(`==========================`);