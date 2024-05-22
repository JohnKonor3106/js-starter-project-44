import readlineSync from 'readline-sync';

function questionForUser() {
  const answer = readlineSync.question('May I have your name?');
  return answer;
}

export default questionForUser;
