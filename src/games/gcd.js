import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const commonDivider = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (Math.abs(num1) > (Math.abs(num2))) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  return num1 + num2;
};

const gcdGame = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const taskNumbers = `${firstNum} ${secondNum}`;
  const expectedAnswer = commonDivider(firstNum, secondNum);
  return [taskNumbers, String(expectedAnswer)];
};

export default () => {
  const taskOfGcd = 'Find the greatest common divisor of given numbers.';
  return gameLogic(taskOfGcd, gcdGame);
};
