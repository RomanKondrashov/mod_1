'use strict';

    const myStr = prompt(`Задание 2 (строка с заглавной буквы): Введите строку`); 

    const upStr = stringToUp => stringToUp.charAt(0).toUpperCase() + stringToUp.slice(1).toLowerCase() ;
    

    console.log (`Задание 2 (строка с заглавной буквы)`);
    console.log (upStr(myStr));
    console.log (`=====================================`);
  