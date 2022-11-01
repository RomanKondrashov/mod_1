'use strict';

(() => {
  const LANG = {
    figures: ['камень', 'бумага', 'ножницы'],
    murbleVariants: ['чет', 'нечет'],
    greetings:
    `Играем в Марбл! 
    Выбираем того, кто делает первый ход! 
    Камень, ножницы, или бумага?`,
    draw: `Ничья, давайте попробуем еще раз`,
    humWin: 'Человек начинает игру',
    compWin: 'Компьютер начинает игру',
    humanName: 'Человек',
    computerName: 'Компьютер',
    again: 'Играть еще?',
    exit: 'Спасибо за игру',
  };

  // определение ответа для камень-ножницы-бумага
  const askAndCheckAnswer = () => {
    const answer = prompt(`${LANG.greetings}`).toLowerCase();
    for (const elem of LANG.figures) {
      if (elem.indexOf(answer) > -1) {
        return LANG.figures.indexOf(elem);
      }
    }
    return askAndCheckAnswer();
  };

  // определение ответа для марблов
  const askAndCheckAnswerMurble = (answer) => {
    for (const elem of LANG.murbleVariants) {
      if (elem.indexOf(answer) > -1) {
        return LANG.murbleVariants.indexOf(elem);
      }
    }
    return -1;
  };

  // вывод результата камень-ножницы-бумага
  const printResult = (human, computer, result) => {
    alert(`
        ${LANG.humanName}: ${human}, 
        ${LANG.computerName}: ${computer}, 
        ${result}
        `);
  };

  // Камень-ножницы-бумага: определяем игрока
  // (код упрощен после последнего комментария куратора)
  const chooseFirstPlayer = () => {
    const humanChoise = askAndCheckAnswer();
    const computerChoise = Math.floor(Math.random() * 3);
    if (humanChoise === computerChoise) {
      printResult(
        LANG.figures[humanChoise],
        LANG.figures[computerChoise],
        LANG.draw,
      );
      return chooseFirstPlayer();
    }
    if (
      (humanChoise === 0 && computerChoise === 1) ||
          (humanChoise === 1 && computerChoise === 2) ||
          (humanChoise === 2 && computerChoise === 0)
    ) {
      printResult(
        LANG.figures[humanChoise],
        LANG.figures[computerChoise],
        LANG.compWin,
      );
      return 0;
    } else {
      printResult(
        LANG.figures[humanChoise],
        LANG.figures[computerChoise],
        LANG.humWin,
      );
      return 1;
    }
  };


  const playMurble = (currentPlayer, humanScore = 10, computerScore = 10) => {
    // currentPlayer = 1, значит ходит человек, в противном случае - машина
    let selectedNumber;
    let answer = -1;

    if (currentPlayer) {
      // ход человека

      // Ответ человека
      do {
        selectedNumber = parseInt(prompt(`
      Загадайте количество шаров (от 1 до ${humanScore})
      `));
      } while (!(selectedNumber > 0 && selectedNumber <= humanScore));

      // Ответ компьтера
      answer = Math.floor(Math.random() * 2);

      // Результат
      if (answer === selectedNumber % 2) {
        humanScore -= selectedNumber;
        computerScore += selectedNumber;
        if (answer) {
          alert(`Комьтер ответил 'нечет' и угадал!
          ${selectedNumber} шара(ов) переходят к нему.
          Человек: ${humanScore}, компьютер: ${computerScore}`);
        } else {
          alert(`Комьтер ответил 'чет' и угадал!
          ${selectedNumber} шара(ов) переходят к нему.
          Человек: ${humanScore}, компьютер: ${computerScore}`);
        }
      } else {
        humanScore += selectedNumber;
        computerScore -= selectedNumber;
        if (answer) {
          alert(`Комьтер ответил 'нечет' и ошибся!
          ${selectedNumber} шара(ов) переходят к вам.
          Человек: ${humanScore}, компьютер: ${computerScore}`);
        } else {
          alert(`Комьтер ответил 'чет' и ошибся!
          ${selectedNumber} шара(ов) переходят к вам.
          Человек: ${humanScore}, компьютер: ${computerScore}`);
        }
      }
    } else {
      // ход компьютера

      // компьютер закадывает количество шариков
      selectedNumber = Math.floor(Math.random() * (computerScore)) + 1;

      // попытка угадать человека
      do {
        answer = prompt(`
      Компьютер загадал количество (от 1 до ${computerScore})
      Попробуйте угадать: 'Чет' или 'Нечет'?
      `);
      } while (askAndCheckAnswerMurble(answer) < 0);

      // Результат
      if (askAndCheckAnswerMurble(answer) === selectedNumber % 2) {
        humanScore += selectedNumber;
        computerScore -= selectedNumber;
        alert(`Верно! ${selectedNumber} шара(ов) переходят к вам.
        Человек: ${humanScore}, компьютер: ${computerScore}`);
      } else {
        humanScore -= selectedNumber;
        computerScore += selectedNumber;
        alert(`Ошибка! ${selectedNumber} шара(ов) переходят к компьютеру.
        Человек: ${humanScore}, компьютер: ${computerScore}`);
      }
    }

    // проверяем можем ли продожить игру
    if (humanScore > 0 && computerScore > 0) {
      playMurble(
        !currentPlayer,
        humanScore,
        computerScore,
      );
    } else {
      if (humanScore <= 0) {
        alert(`Человек проиграл`);
      }
      if (computerScore <= 0) {
        alert(`Компьютер проиграл`);
      }
    }

    // предлагаем сыграть заново
    if (confirm(`${LANG.again}`)) {
      playMurble(
        chooseFirstPlayer(),
      );
    } else {
      alert(`${LANG.exit}`);
    }

    return false;
  };


  const game = () => function start() {
    playMurble(
      chooseFirstPlayer(),
    );
  };

  window.mrbl = game;
})();
