import readlineSync from 'readline-sync';
import questionForUser from '../src/cli.js';

function getRandomNumber(min, max) {
    let num = Math.random() * (max - min) + min;
    return Math.round(num)
  }
  
 
  let res = 0;
  let num = getRandomNumber(1, 50); 

function questionOfPlayer(question = num, name){
  const isEven = (question % 2) === 0; 
  const answer = readlineSync.question(`Question: ${question}`);

  if(answer === 'yes' || answer === 'no'){
    if(answer === 'yes' &&  isEven){
      res += 1;
      console.log('Correct!');
      num = getRandomNumber(1, 50);
    }else if (answer === 'no' && !isEven){
          res += 1;
          console.log('Correct!');
          num = getRandomNumber(1, 50);
        }else if(answer === 'yes' && !isEven){
              console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.
              Let's try again, ${name}!`)
              num = getRandomNumber(1, 50);
           }else if(answer === 'no' && isEven){
                console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.
                Let's try again, ${name}!`)
                num = getRandomNumber(1, 50);
  }
    }else{
      console.log('error!');
      num = getRandomNumber(1, 50);
    }

  if(res === 3){
    console.log(`Congratulations, ${name}!`);
  }
}
  
 function gameSession(){
    const namePlayer = questionForUser();
    // questionForUser();
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`); 
    questionOfPlayer(num, namePlayer);
    questionOfPlayer(num, namePlayer);
    questionOfPlayer(num, namePlayer);
 }


    gameSession(); 



