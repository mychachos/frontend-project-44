import getRandomNumber from '../randomNum.js';
import gameLogic from '../index.js';

const calculator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.round(Math.random() * 2);
  const randomOperator = operators[randomIndex];

  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();
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
  }
  return [expression, String(expectedAnswer)];
};

export default () => {
  const taskOfCalc = 'What is the result of the expression?';
  return gameLogic(taskOfCalc, calculator);
};
