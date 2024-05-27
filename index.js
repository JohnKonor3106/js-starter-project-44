import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.round(num);
  }

function questionForUser() {
    console.log('Welcome to the Brain Games!');
    const answer = readlineSync.question('May I have your name?');
    return answer;
  }

function checkedAnswer(question, trueAnswer){
    let answerPlayer = question;
    const correctUnswer = trueAnswer;
    
    if(answerPlayer === 'yes' && correctUnswer){
      answerPlayer = true;
      return correctUnswer === answerPlayer;
    }else if(answerPlayer === 'no'){
      answerPlayer = false;
      return correctUnswer === answerPlayer;
    }

    return correctUnswer == answerPlayer;
  }

function getSymbol(arr){
    const index = getRandomNumber(0, 2);
    return arr[index];
   }  

function getGCD(num1, num2){
   const maxValue = 100;
   const GCD = [];
   for(let i = 1; i < maxValue; i++){
      if(num1 % i === 0 && num2 % i === 0){
        GCD.push(i);
      }
    }
    return Math.max(...GCD);
  }

  export {getRandomNumber, questionForUser, checkedAnswer, getSymbol, getGCD};