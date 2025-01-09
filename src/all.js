/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
    return new Promise((resolve, reject) => {
      let resolvedCount = 0;
      const results = new Array(promisesArray.length);
  
      promisesArray.forEach((promise, index) => {
        promise
          .then(result => {
            results[index] = result;
            resolvedCount += 1;
            if (resolvedCount === promisesArray.length) {
              resolve(results);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    });
  };