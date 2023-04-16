import readlineSyn from 'readline-sync';
import getRandomNumbers  from '../randomNum.js';

const isEvenNum = (num) => num % 2 === 0;
const roundCount = 3;


export default () => {
   console.log('Welcome to the Brain Games!');
   const name = readlineSyn.question('May I have your name? ');
   console.log(`Hello, ${name}!`);
   console.log('Answer "yes" if the number is even, otherwise answer "no".');

   for (let i = 0; i < roundCount; i += 1){
      const numQuest = getRandomNumbers();
      const expectedAnswer = isEvenNum(numQuest) ? 'yes' : 'no';

      console.log(`Question: ${numQuest}`);
      const answer = readlineSyn.question('Your answer: ');

      if (answer === expectedAnswer) {
         console.log("Correct!")
      } else {
         return console.log(`${answer} is wrong answer ;(. Correct answer was ${expectedAnswer}.\nLet's try again, ${name}!`); 
      }
      
   }
   console.log(`Congratulations, ${name}!`);
};

