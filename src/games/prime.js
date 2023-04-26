import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const isPrimeNumber = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeGame = () => {
  const taskNumber = getRandomNumber(1, 50);
  const expectedAnswer = isPrimeNumber(taskNumber) ? 'yes' : 'no';
  return [taskNumber, expectedAnswer];
};

export default () => {
  const taskOfPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameLogic(taskOfPrime, primeGame);
};
