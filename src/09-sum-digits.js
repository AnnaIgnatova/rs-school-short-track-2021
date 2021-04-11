/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numFull = n;
  let digit = 0;
  let sum = 0;
  let value = 1;

  while (value) {
    if (Math.floor(numFull / 10) === 0) {
      sum += numFull % 10;
      if (sum < 10) {
        value = 0;
      }
      numFull = sum;
      sum = 0;
    }
    digit = numFull % 10;
    sum += digit;
    numFull = Math.floor(numFull / 10);
  }
  return sum;
}

module.exports = getSumOfDigits;
