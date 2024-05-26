import * as utils from '../../index.js';
import readlineSync from 'readline-sync';
 

function calc(name){
 let res = 0;
 const num_1 = utils.getRandomNumber(1, 50);
 const num_2 = utils.getRandomNumber(1, 50);
 const operators = ['+', '-', '*'];
 const symbol = utils.getSymbol(operators);
 let correctUnswer = 0;

 const answer = readlineSync.question(`${num_1} ${symbol} ${num_2}`);

 if(typeof answer === typeof 'number'){
    if(symbol === '+'){
        correctUnswer = num_1 + num_2;
     }else if(symbol === '-'){
           correctUnswer = num_1 - num_2;
       }else if(symbol === '*'){
                correctUnswer = num_1 * num_2;
           }
   
    const response = utils.checkedAnswer(answer, correctUnswer);
    
    if(response){
        res += 1;
        console.log('Correct!');
        }else{
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctUnswer}.
                    Let's try again, ${name}!`)
        }
            }else{
                console.log('error!');
        }
    
        return res;
}

function gameCalc(){
    let res = 0;
    const namePlayer = utils.questionForUser();
    console.log(`What is the result of the expression?`); 

    res += calc(namePlayer);
    res += calc(namePlayer);
    res += calc(namePlayer);

    if(res === 3){
        console.log(`Congratulations, ${namePlayer}!`);
      }
}


export default gameCalc;