/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let resultSum = 0;
  let sumJ = 0;
  const m = arr[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!arr[j][i]) {
        break;
      } else {
        sumJ += arr[j][i];
      }
    }
    resultSum += sumJ;
    sumJ = 0;
  }

  return resultSum;
}

module.exports = getMatrixElementsSum;
