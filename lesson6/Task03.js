const myStrToInvert = prompt(`Задание 3 (разворот строки): Введите строку`); 

    const invertStr = stringToInvert => stringToInvert.split("").reverse().join("");
    

    console.log (`Задание 3 (разворот строки)`);
    console.log (invertStr(myStrToInvert));
    console.log (`=====================================`);