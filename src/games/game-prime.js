import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function prime(name) {
  let res = 0;
  const num = utils.getRandomNumber(1, 50);
  let correctUnswer = utils.isPrime(num);
  const answer = readlineSync.question(`${num}`);

  const response = utils.checkedAnswer(answer, correctUnswer);

  if (answer === 'yes' || answer === 'no') {
    if (response) {
      res += 1;
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        correctUnswer = 'no';
      } else if (answer === 'no') {
        correctUnswer = 'yes';
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
                 Let's try again, ${name}!`);
    }
  } else {
    console.log('error!');
  }

  return res;
}

function gamePrime() {
  let res = 0;
  const namePlayer = utils.questionForUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  res += prime(namePlayer);
  res += prime(namePlayer);
  res += prime(namePlayer);

  if (res === 3) {
    console.log(`Congratulations, ${namePlayer}!`);
  }
}

export default gamePrime;
