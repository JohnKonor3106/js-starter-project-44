import * as utils from '../../index.js';
import readlineSync from 'readline-sync';

function gcd(name){
  let res = 0;
  const num_1 = utils.getRandomNumber(1, 100);
  const num_2 = utils.getRandomNumber(1, 100);
  const correctUnswer = utils.getGCD(num_1, num_2);
  const answer = readlineSync.question(`${num_1} ${num_2}`);

  const response = utils.checkedAnswer(answer, correctUnswer);

  if(response){
    res += 1;
    console.log('Correct!');
    }else{
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
            Let's try again, ${name}!`)
        }
    return res;
  }


function gameGCD(){
    let res = 0;
    const namePlayer = utils.questionForUser();
    console.log(`What is the result of the expression?`); 

    res += gcd(namePlayer);
    res += gcd(namePlayer);
    res += gcd(namePlayer);

    if(res === 3){
        console.log(`Congratulations, ${namePlayer}!`);
      }
}

export default gameGCD;