/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let sumResult = 0;
  const matrixResult = [];

  for (let i = 0; i < matrix.length; i++) {
    matrixResult[i] = [];

    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0 && j === 0) {
        sumResult = +matrix[i + 1][j] + +matrix[i][j + 1] + +matrix[i + 1][j + 1];
        matrixResult[i][j] = sumResult;
      }
      if (i === 0 && j !== 0 && j !== (matrix[i].length - 1)) {
        sumResult = +matrix[i + 1][j] + +matrix[i][j + 1] + +matrix[i][j - 1];
        sumResult += +matrix[i + 1][j - 1] + +matrix[i + 1][j + 1];
        matrixResult[i][j] = sumResult;
      }
      if (i === 0 && j === (matrix[i].length - 1)) {
        sumResult = +matrix[i + 1][j] + +matrix[i][j - 1] + +matrix[i + 1][j - 1];
        matrixResult[i][j] = sumResult;
      }
      if (i !== 0 && j === (matrix[i].length - 1) && i !== (matrix.length - 1)) {
        sumResult = +matrix[i - 1][j] + +matrix[i][j - 1] + +matrix[i + 1][j];
        sumResult += +matrix[i - 1][j - 1] + +matrix[i + 1][j - 1];
        matrixResult[i][j] = sumResult;
      }
      if (i === (matrix.length - 1) && j === (matrix[i].length - 1)) {
        sumResult = +matrix[i - 1][j] + +matrix[i][j - 1] + +matrix[i - 1][j - 1];
        matrixResult[i][j] = sumResult;
      }
      if (i === (matrix.length - 1) && j !== (matrix[i].length - 1) && j !== 0) {
        sumResult = +matrix[i - 1][j - 1] + +matrix[i - 1][j + 1] + +matrix[i - 1][j];
        sumResult += +matrix[i][j - 1] + +matrix[i][j + 1];
        matrixResult[i][j] = sumResult;
      }
      if (i === (matrix.length - 1) && j === 0) {
        sumResult = +matrix[i - 1][j + 1] + +matrix[i - 1][j] + +matrix[i][j + 1];
        matrixResult[i][j] = sumResult;
      }
      if (i !== (matrix.length - 1) && j === 0 && i !== 0) {
        sumResult = +matrix[i - 1][j + 1] + +matrix[i + 1][j + 1] + +matrix[i - 1][j];
        sumResult += +matrix[i + 1][j] + +matrix[i][j + 1];
        matrixResult[i][j] = sumResult;
      }
      if (i !== (matrix.length - 1) && j !== 0 && i !== 0 && j !== (matrix[i].length - 1)) {
        sumResult = +matrix[i - 1][j - 1] + +matrix[i - 1][j] + +matrix[i][j + 1];
        sumResult += +matrix[i + 1][j] + +matrix[i][j - 1] + +matrix[i - 1][j + 1];
        sumResult += +matrix[i + 1][j + 1] + +matrix[i + 1][j - 1];
        matrixResult[i][j] = sumResult;
      }
    }
  }

  return matrixResult;
}

module.exports = minesweeper;
