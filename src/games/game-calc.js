import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function calc(name) {
  let statusGame = true;
  const num1 = utils.getRandomNumber(1, 50);
  const num2 = utils.getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const symbol = utils.getSymbol(operators);
  let correctUnswer = 0;
  console.log(`Question: ${num1} ${symbol} ${num2}`)
  const answer = readlineSync.question(`Your answer: `);

    if (symbol === '+') {
      correctUnswer = num1 + num2;
    } else if (symbol === '-') {
      correctUnswer = num1 - num2;
    } else if (symbol === '*') {
      correctUnswer = num1 * num2;
    }

    const response = utils.checkedAnswer(answer, correctUnswer);

    if (response) {
      console.log('Correct!');

    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
                    Let's try again, ${name}!`);
                    statusGame = false;
    }
 

  return statusGame;;
}

function gameCalc() {
  utils.gameProcess(calc, 'calc');
}

export default gameCalc;
