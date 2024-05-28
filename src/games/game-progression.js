import * as utils from '../../index.js';
import readlineSync from 'readline-sync';


function progression(name){
    let res = 0;
   
    const arrayProgression = utils.getProgression(10, 4, 10);
    const index = utils.getRandomNumber(0, arrayProgression.length - 1);
    console.log(index)
    const correctUnswer = arrayProgression[index];
    console.log(correctUnswer)
    const hideElemArray = utils.hideElement(arrayProgression, index);
    const answer = readlineSync.question(`${hideElemArray}`);
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


    function gameProgression(){
        let res = 0;
        const namePlayer = utils.questionForUser();
        console.log(`What number is missing in the progression?`); 
    
        res += progression(namePlayer);
        res += progression(namePlayer);
        res += progression(namePlayer);
    
        if(res === 3){
            console.log(`Congratulations, ${namePlayer}!`);
          }
    }

export default gameProgression;