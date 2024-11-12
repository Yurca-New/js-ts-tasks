/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        currentSequence.push(arr[i]);
    } else {
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
        currentSequence = [arr[i]];
    }
}

// Проверка последней последовательности
if (currentSequence.length > maxSequence.length) {
    maxSequence = currentSequence;
}

return maxSequence;
  throw new Error('Not implemented'); // remove me and write a solution
};