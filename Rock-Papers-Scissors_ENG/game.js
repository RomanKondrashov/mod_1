'use strict';

(() => {
  const LANG_RU = {
    figures: ['камень', 'бумага', 'ножницы'],
    greetings: 'Камень, ножницы, или бумага?',
    draw: `Ничья`,
    humWin: 'Человек победил',
    compWin: 'Компьютер победил',
    humanName: 'Человек',
    computerName: 'Компьютер',
    again: 'Играть еще?',
    exit: 'Спасибо за игру',
  };

  const LANG_ENG = {
    figures: ['rock', 'paper', 'scissors'],
    greetings: 'Rock, paper, or scissors?',
    draw: `Draw`,
    humWin: 'Human wins',
    compWin: 'Computer wins',
    humanName: 'Human',
    computerName: 'Computer',
    again: 'Play again?',
    exit: 'Tnank for playing!',
  };

  const askAndCheckAnswer = lang => {
    const langSpace = lang === 'EN' || lang === 'ENG' ? LANG_ENG : LANG_RU;
    const answer = prompt(`${langSpace.greetings}`).toLowerCase();
    for (const elem of langSpace.figures) {
      if (elem.indexOf(answer) > -1) {
        return langSpace.figures.indexOf(elem) + 1;
      }
    }
    return askAndCheckAnswer(lang);
  };

  const printResult = (human, computer, result, lang = '', score) => {
    const langSpace = lang === 'EN' || lang === 'ENG' ? LANG_ENG : LANG_RU;

    alert(`
        ${langSpace.humanName}: ${human}, 
        ${langSpace.computerName}: ${computer}, 
        ${result},
        ${score}`,
    );
  };

  const game = (lang = 'EN') => {
    const result = {
      human: 0,
      computer: 0,
    };

    return function start() {
      const langSpace = lang === 'EN' || lang === 'ENG' ? LANG_ENG : LANG_RU;
      const humanChoise = askAndCheckAnswer(lang) - 1;
      const computerChoise = Math.floor(Math.random() * 3);
      if (humanChoise === computerChoise) {
        printResult(
          langSpace.figures[humanChoise],
          langSpace.figures[computerChoise],
          langSpace.draw,
          lang,
          `${result.human} - ${result.computer}`,
        );
        start(lang);
      } else {
        if (
          (humanChoise === 0 && computerChoise === 1) ||
          (humanChoise === 1 && computerChoise === 2) ||
          (humanChoise === 2 && computerChoise === 0)
        ) {
          result.computer++;
          printResult(
            langSpace.figures[humanChoise],
            langSpace.figures[computerChoise],
            langSpace.compWin,
            lang,
            `${result.human} - ${result.computer}`,
          );
        }
        if (
          (humanChoise === 0 && computerChoise === 2) ||
          (humanChoise === 1 && computerChoise === 0) ||
          (humanChoise === 2 && computerChoise === 1)
        ) {
          result.human++;
          printResult(
            langSpace.figures[humanChoise],
            langSpace.figures[computerChoise],
            langSpace.humWin,
            lang,
            `${result.human} - ${result.computer}`,
          );
        }

        console.log(`
          ${langSpace.humanName} (${langSpace.figures[humanChoise]}) 
          ${result.human}
          -
          ${result.computer} 
          ${langSpace.computerName} (${langSpace.figures[computerChoise]})
        `);

        if (confirm(`${langSpace.again}`)) {
          start(lang);
        } else {
          alert(`${langSpace.exit}`);
        }
      }
    };
  };

  window.rps = game;
})();
