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
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  const arr = [];
  for (let i = 0; i <= arrS1.length; i++) {
    const arr2Index = arrS2.indexOf(arrS1[i]);
    if (arr2Index !== -1) {
      arr.push(arrS1[i]);
      arrS2.splice(arr2Index, 1);
    }
  }
  const result = {};
  arr.forEach((a) => {
    result[a] = result[a] + 1 || 1;
  });
  const sum = Object.values(result).reduce((a, b) => a + b, 0);
  return sum;
}

module.exports = getCommonCharacterCount;
