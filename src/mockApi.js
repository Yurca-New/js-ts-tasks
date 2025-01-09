/**
 * Create the function mocker which will return defined data with a specified delay.
 * It might be helpful in Front-end development when there is a need to make sure that your
 * interface works well with data that you get asynchronously. The use of the function is shown below:
 *
 * @param {object} response - The response to return when the promise resolves.
 * @param {number} delay - The delay in milliseconds before the promise resolves or rejects.
 * @returns {Function} - A function that takes a status ('resolve' or 'reject') and returns a promise.
 */
module.exports.mockApi = function mockApi(response, delay) {
  return function(status) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 'resolve') {
          resolve(response);
        } else if (status === 'reject') {
          reject(new Error('Rejected'));
        }
      }, delay);
    });
  };
};