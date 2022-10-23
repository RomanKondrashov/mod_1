'use strict';

const letsPlay = (min, max) => {

    //генерируем число
    const myNumber = Math.round(Math.random() * (max - min) + min);

    //создаем массив под ответы
    const givenAnswers = [];

    //считаем количество доступных попыток
    let lives = Math.round((max - min)*0.3);

    //переменная под хранение ответов
    let answer;

    do{
        //запрашиваем число
        answer = prompt(`Введите предполагаемое число. У вас ${lives} попыток`);

        //кнопка отмена
        if (answer == null || answer === '') {
            break;
        }    

        //приводим полученную строку к числу
        answer = parseInt(answer);

        //неверное значение
        if (Number.isNaN(answer)){
            console.log('Введено неверное значение');
        }else{
            console.log(`Введено число: ${answer}`);
            if (answer > myNumber){
                console.log(`Загаданное число меньше`);
            }
            if (answer < myNumber){
                console.log(`Загаданное число больше`);
            }

            // если найден индекс такого же ответа
            if (givenAnswers.indexOf(answer) > -1){
                console.log(`Значение уже было ранее введено`); //говорим о повторе
            }else{ //иначе
                givenAnswers.push(answer); //добавляем в массив ответов
                lives--; //уменьшаем жизни
                console.log(`Попытка использована. Осталось попыток ${lives}`);

                if (lives === 0) { //если помер - то помер, выходим из цикла
                    break;
                }
            }
        }

        console.log(`---`);
        console.log(`Массив ответов ${givenAnswers}`);
        console.log(`---`);
    } while (answer !== myNumber);


    // исход игры определяем в одном месте, в конце
    if (answer === myNumber){ //если мы дошли до нужного ответа, значит успех
        return(`Вы угадали! Число ${answer}, Игра завершена`);
    }else{ //если не дошли до правильного ответа то варианта 2
        if (lives === 0){ //закончились жизни
            return(`Закончились жизни`);
        }else{ //юыла нажата отмена
            return(`Игра была завершена пользователем`);
        }


        
    }    
   
}


console.log(`Задание Игра 2:`);
const minN = parseInt(prompt(`Введите первое число диопазона (минимум)`)); 
const maxN = parseInt(prompt(`Введите второе число диопазона (максимум)`)); 
console.log(`Компьютер загадал число, попробуйте его угадать`);
console.log(letsPlay(minN, maxN));
