/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  // let reslt = 0;
  // for (var i = 0; i < arr.length; i++) {
  //   for (var j = i + 1; j < arr.length; j++) {
  //     if (arr[i] !== arr[j]) {
  //       reslt++;
  //     }
  //   }
  // }
  // return reslt;
  let reslt = new Set(arr);
  return reslt.size;
  throw new Error('Not implemented'); // remove me and write a solution
};
