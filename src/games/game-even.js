import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function even(name) {
  let statusGame = true;

  const num = utils.getRandomNumber(1, 50);
  const isEven = (num % 2) === 0;
  let correctUnswer;
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  if ((answer === 'yes' || answer === 'no') && statusGame) {
    const response = utils.checkedAnswer(answer, isEven);
    if (response) {
      statusGame = true;
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        correctUnswer = 'no';
      } else if (answer === 'no') {
        correctUnswer = 'yes';
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctUnswer}'.
                Let's try again, ${name}!`);
      statusGame = false;
    }
  } else {
    statusGame = false;
  }

  return statusGame;
}

function gameEven() {
  utils.gameProcess(even, 'even');
}

export default gameEven;
