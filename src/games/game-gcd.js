import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function gcd(name) {
  let res = 0;
  const num1 = utils.getRandomNumber(1, 100);
  const num2 = utils.getRandomNumber(1, 100);
  const correctUnswer = utils.getGCD(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('You answer: ')
  const response = utils.checkedAnswer(answer, correctUnswer);

  if (response) {
    res += 1;
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
            Let's try again, ${name}!`);
  }
  return res;
}

function gameGCD() {
  let res = 0;
  const namePlayer = utils.solution();
  console.log('What is the result of the expression?');

  res += gcd(namePlayer);
  res += gcd(namePlayer);
  res += gcd(namePlayer);

  if (res === 3) {
    console.log(`Congratulations, ${namePlayer}!`);
  }
}

export default gameGCD;
