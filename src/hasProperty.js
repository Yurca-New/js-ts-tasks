/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  // for (let i = 0; i < object.length; i++) {
    if (object[prop] === undefined) {
      return false;
    }else{
      return true;
    }
  // }
  throw new Error('Not implemented'); // remove me and write a solution
};
