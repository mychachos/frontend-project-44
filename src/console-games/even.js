import getRandomNumbers from '../randomNum.js';
import gameLogic from '../index.js';

const isEven = () => {
  const isEvenNum = (num) => num % 2 === 0;
  const taskNumber = getRandomNumbers();
  const expectedAnswer = isEvenNum(taskNumber) ? 'yes' : 'no';

  return [taskNumber, expectedAnswer];
};

export default () => {
  const taskOfEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  return gameLogic(taskOfEven, isEven);
};
