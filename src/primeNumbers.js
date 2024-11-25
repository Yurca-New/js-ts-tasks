/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true;
  }
  function fn(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    return result;
  }

  return fn;
};
