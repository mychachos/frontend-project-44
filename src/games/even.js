import getRandomNumbers from '../utils.js';
import gameLogic from '../index.js';

const isEvenNum = (num) => num % 2 === 0;

const evenGame = () => {
  const taskNumber = getRandomNumbers(1, 50);
  const expectedAnswer = isEvenNum(taskNumber) ? 'yes' : 'no';
  return [taskNumber, expectedAnswer];
};

export default () => {
  const taskOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  return gameLogic(taskOfEven, evenGame);
};
