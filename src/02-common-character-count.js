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

  for (let i = 0; i < str1.length; i++) {
    if (str2.indexOf(str1[i]) !== -1) {
      str2.splice(str2.indexOf(str1[i]), 1);
      result++;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
