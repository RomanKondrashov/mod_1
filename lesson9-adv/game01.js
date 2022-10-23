'use strict';

const letsPlay = () => {
    const myNumber = Math.round(Math.random() * 100);
    let answer = -1;

    do{
        answer = prompt('Введите предполагаемое число');

        //кнопка отмена
        if (answer == null || answer === '') {
            break;
        }    

        answer = parseInt(answer);

        //неверное значение
        if (Number.isNaN(answer)){
            console.log('Введено неверное значение')
        }else{
            console.log(`Введено число: ${answer}`);
            if (answer > myNumber){
                console.log(`Загаданное число меньше`);
            }
            if (answer < myNumber){
                console.log(`Загаданное число больше`);
            }
        }

        console.log(`---`);
    } while (answer !== myNumber);

    if (answer === myNumber){
        return(`Вы угадали! Число ${answer}, Игра завершена`);
    }else{
        return(`Игра была завершена пользователем`);
    }    
    

    
}

console.log(`Задание Игра 1:`);
console.log(`Компьютер загадал число, попробуйте его угадать`);
console.log(letsPlay());
