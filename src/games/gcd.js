import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const commonDivider = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (Math.abs(number1) > (Math.abs(number2))) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const gcdGame = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const expression = `${firstNum} ${secondNum}`;
  const expectedAnswer = commonDivider(firstNum, secondNum);
  return [expression, String(expectedAnswer)];
};

export default () => {
  const taskOfGcd = 'Find the greatest common divisor of given numbers.';
  return gameLogic(taskOfGcd, gcdGame);
};
