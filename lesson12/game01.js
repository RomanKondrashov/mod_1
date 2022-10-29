'use strict';

// генератор числа
const getNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// генерируем количество попыток
const generateLivesNumber = (min, max) => Math.round((max - min) * 0.3);

// основная функция
const letsPlay = (myNumber, lives, givenAnswers = []) => {
  let answer;
  answer = prompt(`Введите предполагаемое число. У вас ${lives} попыток`);
  if (answer === null || answer === '') {
    console.log(`Игра была остановлена игроком`);
    return false;
  }
  answer = parseInt(answer);
  if (answer !== myNumber) {
    // неверное значение
    if (Number.isNaN(answer)) {
      console.log('Введено неверное значение');
    } else {
      console.log(`Введено число: ${answer}`);
      if (answer > myNumber) {
        console.log(`Загаданное число меньше`);
      }
      if (answer < myNumber) {
        console.log(`Загаданное число больше`);
      }
      // если найден индекс такого же ответа
      if (givenAnswers.indexOf(answer) > -1) {
        console.log(`Значение уже было ранее введено`); // говорим о повторе
      } else { // иначе
        givenAnswers.push(answer); // добавляем в массив ответов
        lives--; // уменьшаем жизни
        console.log(`Попытка использована. Осталось попыток ${lives}`);
        console.log(`Массив ответов ${givenAnswers}`);
        if (lives === 0) { // если помер - то помер, выходим из цикла
          console.log(`Жизни закончились, игра завершена`);
          return false;
        } else {
          letsPlay(myNumber, lives, givenAnswers);
        }
      }
    }
  } else {
    console.log(`Вы угадали! Число ${answer}, Игра завершена`);
    return false;
  }
};
console.log(`Задание Игра 2:`);
const minN = parseInt(prompt(`Введите первое число диопазона (минимум)`));
const maxN = parseInt(prompt(`Введите второе число диопазона (максимум)`));
console.log(`Компьютер загадал число, попробуйте его угадать`);
letsPlay(getNumber(minN, maxN), generateLivesNumber(minN, maxN));
