/* eslint-disable no-fallthrough */
import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const calcGame = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 1);
  const randomOperator = operators[randomIndex];
  const expression = `${firstNum} ${randomOperator} ${secondNum}`;
  let expectedAnswer;

  switch (randomOperator) {
    case '+':
      expectedAnswer = firstNum + secondNum;
      break;
    case '-':
      expectedAnswer = firstNum - secondNum;
      break;
    case '*':
      expectedAnswer = firstNum * secondNum;
      break;
    default:
      break;
  }
  return [expression, String(expectedAnswer)];
};

export default () => {
  const taskOfCalc = 'What is the result of the expression?';
  return gameLogic(taskOfCalc, calcGame);
};
