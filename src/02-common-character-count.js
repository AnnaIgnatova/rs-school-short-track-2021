/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('');
  const str2 = s2.split('');
  let result = 0;
  const minStr = Math.min(str1.length, str2.length);

  for (let i = 0; i < minStr; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        result++;
        str2.splice(j, 1);
        break;
      }
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
