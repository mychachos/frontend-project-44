import getRandomNumber from '../randomNum.js';
import gameLogic from '../index.js';

const primeGame = () => {
  const taskNumber = getRandomNumber();
  const isPrimeNumber = (num) => {
    if (num < 2) return false;
    for (let i = 2; i < num / 2; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const expectedAnswer = isPrimeNumber(taskNumber) ? 'yes' : 'no';

  return [taskNumber, expectedAnswer];
};

export default () => {
  const taskOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameLogic(taskOfPrime, primeGame);
};
