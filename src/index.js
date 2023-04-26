import readlineSync from 'readline-sync';

const roundCounter = 3;

const gameLogic = (task, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(task);

  for (let i = 0; i < roundCounter; i += 1) {
    const [expression, expectedAnswer] = game();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === expectedAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
