import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function prime(name) {
  let statusGame = true;

  const num = utils.getRandomNumber(1, 50);
  let correctUnswer = utils.isPrime(num);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question(`Your answer: `);

  const response = utils.checkedAnswer(answer, correctUnswer);

  if (answer === 'yes' || answer === 'no') {
    if (response) {
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        correctUnswer = 'no';
      } else if (answer === 'no') {
        correctUnswer = 'yes';
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
                 Let's try again, ${name}!`);
                 statusGame = false;
    }
  } else {
    statusGame = false;
  }

  return statusGame;
}

function gamePrime() {
  utils.gameProcess(prime, 'prime');
}

export default gamePrime;
