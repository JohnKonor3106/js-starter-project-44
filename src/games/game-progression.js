import readlineSync from 'readline-sync';
import * as utils from '../../index.js';

function progression(name) {
  let statusGame = true;

  const arrayProgression = utils.getProgression(10, 4, 10);
  const index = utils.getRandomNumber(0, arrayProgression.length - 1);
  const correctUnswer = arrayProgression[index];
  const hideElemArray = utils.hideElement(arrayProgression, index);
  console.log(`Question: ${hideElemArray}`);
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

function gameProgression() {
  utils.gameProcess(progression, 'progression');
}

export default gameProgression;
