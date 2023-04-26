import gameLogic from '../index.js';
import getRandomNumber from '../utils.js';

const getProgressionNumbers = () => {
  const startProgression = getRandomNumber(1, 50);
  const randomInterval = getRandomNumber(1, 5);
  const result = [];
  for (let i = startProgression; result.length < 10; i += randomInterval) {
    result.push(i);
  }
  return result;
};

const progressionGame = () => {
  const randomIndex = getRandomNumber(0, 8);
  const numbers = getProgressionNumbers();
  const expectedAnswer = numbers[randomIndex];
  const expression = String(numbers.join(' ')).replace(expectedAnswer, '..');
  return [expression, String(expectedAnswer)];
};

export default () => {
  const taskOfProgression = 'What number is missing in the progression?';
  return gameLogic(taskOfProgression, progressionGame);
};
