'use strict';




const letsPlay = () => {
    const myNumber = Math.round(Math.random() * 100);
    let answer = -1;

    do{
        answer = parseInt(prompt('Введите предполагаемое число'));

        if (answer == null || answer == "") break;

        console.log(`Введено число: ${answer}`);
        if (answer > myNumber){
            console.log(`Загаданное число меньше`);
        }
        if (answer < myNumber){
            console.log(`Загаданное число больше`);
        }


        console.log(`---`);
    } while (answer !== myNumber);

    return(`Вы угадали! Число ${answer}, Игра завершена`);

    
}

console.log(`Задание Игра 1:`);
console.log(`Компьютер загадал число, попробуйте его угадать`);
console.log(letsPlay());
