'use strict';

const checkLeapYear = (year) =>{
    if (year % 4) {                                             //если остаток от деления на 4 больше 0
        return false;                                               //значит год сразу НЕвисокосный

        }else{                                                      // далее
            if (!(year % 100)){                                  // если год делится нацело на 100 то запускаем новую проверку
                if (!(year % 400)){                                  //усли год делится на 400 без остатка
                    return true;                                        //то он високосный
                }else{
                    return false;                                       //иначе нет
                }
            }else{
                return true;                                        //иначе год Високосный
            }
        }
}



const getLeapArray = (min, max) => {

    if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }

    const resArray = [];
    for (let i = min; i <= max; i++) {
        if (checkLeapYear(i)) resArray.push(i);
    }
    return resArray;
}

console.log(`------------------------------------------------------------------`);
console.log(`Задание 4:`);
console.log(`Года между 1899 и 2030: ${getLeapArray(1899,2030)}`);
console.log(`Года между 2030 и 1899 (параметры введенные наоборот): ${getLeapArray(2030,1899)}`);
console.log(`Года между -100 и 100 : ${getLeapArray(-100,100)}`);
console.log(`Года между 0 и 400 : ${getLeapArray(0,400)}`);