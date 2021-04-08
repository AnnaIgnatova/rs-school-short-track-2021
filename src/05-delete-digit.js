/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = [];
  let j = 0;
  let num = n;

  while (num > 0) {
    digits[j] = num % 10;
    num = Math.floor(num / 10);
    j++;
  }

  let minDigit = digits[0];
  let pos = 0;

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < minDigit) {
      minDigit = digits[i];
      pos = i;
    }
  }

  digits.splice(pos, 1);
  return Number(digits.reverse().join(''));
}

module.exports = deleteDigit;
