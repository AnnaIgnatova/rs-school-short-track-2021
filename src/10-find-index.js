/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstValue = 0;
  let lastValue = array.length - 1;
  let pos = -1;
  let foundValue = false;
  let middle;

  while (!foundValue && firstValue <= lastValue) {
    middle = Math.floor((firstValue + lastValue) / 2);
    if (array[middle] === value) {
      foundValue = true;
      pos = middle;
    } else
    if (array[middle] > value) {
      lastValue = middle - 1;
    } else {
      firstValue = middle + 1;
    }
  }
  return pos;
}

module.exports = findIndex;
