import readlineSync from 'readline-sync';

function questionForUser() {
  console.log('Welcome to the Brain Games!');
  const answer = readlineSync.question('May I have your name?');
  return console.log(`Hello, ${answer}!`);
}

export default questionForUser;
 