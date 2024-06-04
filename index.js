import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.round(num);
}

function solution() {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name?');
  console.log(`Hello, ${answer}`);
  return answer;
}



function checkedAnswer(question, trueAnswer) {
  let answerPlayer = question;
  const correctUnswer = trueAnswer;

  if (answerPlayer === 'yes' && correctUnswer) {
    answerPlayer = true;
    return correctUnswer === answerPlayer;
  } if (answerPlayer === 'no') {
    answerPlayer = false;
    return correctUnswer === answerPlayer;
  }

  return correctUnswer == answerPlayer;
}

function getSymbol(arr) {
  const index = getRandomNumber(0, 2);
  return arr[index];
}

function getGCD(num1, num2) {
  const maxValue = 100;
  const GCD = [];
  for (let i = 1; i < maxValue; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      GCD.push(i);
    }
  }
  return Math.max(...GCD);
}

function getProgression(start, step, length) {
  const startNumber = getRandomNumber(1, start);
  const stepProgression = getRandomNumber(2, step);
  const lengthProgression = getRandomNumber(10, length);

  let countProgression = 0;
  const progression = [];
  let result = 0;

  for (let i = startNumber; countProgression < lengthProgression; i += stepProgression) {
    countProgression += 1;
    result = i;
    progression.push(result);
  }
  return progression;
}

function hideElement(arr, item) {
  const hideItem = arr;
  hideItem[item] = '..';
  return hideItem.join(' ');
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

export {
  getRandomNumber, solution, checkedAnswer, getSymbol, getGCD,
  getProgression, hideElement, isPrime,
};
