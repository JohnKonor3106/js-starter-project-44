import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function even(name) {
  const num = utils.getRandomNumber(1, 50);
  const isEven = (num % 2) === 0;
  let res = 0;
  let correctUnswer;
  console.log(`Question: ${num}`);
  const answer = readlineSync.question(`Your answer: `);

  if (answer === 'yes' || answer === 'no') {
    const response = utils.checkedAnswer(answer, isEven);
    if (response) {
      res += 1;
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        correctUnswer = 'no';
      } else if (answer === 'no') {
        correctUnswer = 'yes';
      }
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctUnswer}'.
                Let's try again, ${name}!`);
    }
  } else {
    console.log('error!');
  }

  return res;
}

function gameEven() {
  let res = 0;
  const namePlayer = utils.solution();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  res += even(namePlayer);
  res += even(namePlayer);
  res += even(namePlayer);

  if (res === 3) {
    console.log(`Congratulations, ${namePlayer}!`);
  }
}

export default gameEven;
