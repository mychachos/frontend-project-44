/* eslint-disable consistent-return */
import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
};
const calcGame = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 1);
  const randomOperator = operators[randomIndex];
  const expression = `${firstNum} ${randomOperator} ${secondNum}`;
  const expectedAnswer = calculator(firstNum, secondNum, randomOperator);
  return [expression, String(expectedAnswer)];
};

export default () => {
  const taskOfCalc = 'What is the result of the expression?';
  return gameLogic(taskOfCalc, calcGame);
};
