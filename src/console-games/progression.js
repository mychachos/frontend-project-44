import gameLogic from '../index.js';
import getRandomNumber from '../randomNum.js';

const progressionGame = () => {
  const getProgressionNumbers = () => {
    const startProgression = getRandomNumber();
    const randomInterval = Math.round(Math.random() * 3) + 2;
    const result = [];
    for (let i = startProgression; result.length < 10; i += randomInterval) {
      result.push(i);
    }
    return result;
  };

  const numbers = getProgressionNumbers();
  const randomIndex = Math.round(Math.random() * 9);
  const expectedAnswer = numbers[randomIndex];

  const expression = () => {
    if (numbers.includes(numbers[randomIndex])) {
      numbers[randomIndex] = '..';
    }
    return numbers.join(' ');
  };

  return [expression(), String(expectedAnswer)];
};

export default () => {
  const taskOfProgression = 'What number is missing in the progression?';
  return gameLogic(taskOfProgression, progressionGame);
};
