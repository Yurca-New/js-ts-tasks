/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === value) {
  //     arr.splice(i, value.length)
  //    }
  // }
  // return arr;
  return arr.filter(i => !(JSON.stringify(i) === JSON.stringify(value)));
  throw new Error('Not implemented'); // remove me and write a solution
};
