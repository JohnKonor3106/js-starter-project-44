import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function gcd(name) {
  let statusGame = true;
  const num1 = utils.getRandomNumber(1, 100);
  const num2 = utils.getRandomNumber(1, 100);
  const correctUnswer = utils.getGCD(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const response = utils.checkedAnswer(answer, correctUnswer);

  if (response) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
            Let's try again, ${name}!`);
    statusGame = false;
  }
  return statusGame;
}

function gameGCD() {
  utils.gameProcess(gcd, 'gcd');
}

export default gameGCD;
