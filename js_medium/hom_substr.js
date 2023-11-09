// Given a string s, return the number of homogenous substrings of s. Since the answer may be too large, return it modulo 10^9 + 7.
// A string is homogenous if all the characters of the string are the same.
// A substring is a contiguous sequence of characters within a string.

// Input: s = "abbcccaa"
// Output: 13
// Explanation: The homogenous substrings are listed as below:
// "a"   appears 3 times.
// "aa"  appears 1 time.
// "b"   appears 2 times.
// "bb"  appears 1 time.
// "c"   appears 3 times.
// "cc"  appears 2 times.
// "ccc" appears 1 time.
// 3 + 1 + 2 + 1 + 3 + 2 + 1 = 13.

// ----------------------------------------------------------------------

const countHomogenous = (s) => {
  const MODULO = 10 ** 9 + 7;
  let count = 0;

  const homCount = (len) => {
    let result = 1;
    for (let i = len; i > 1; i--) {
      result = result + i;
    }
    return result;
  };

  let homoLen = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === s[i]) {
      homoLen++;
    } else {
      count = count + homCount(homoLen);
      homoLen = 1;
    }
  }

  const calculateModulo = (value, modulo) => {
    return value >= modulo ? value % modulo : value;
  };

  return calculateModulo(count, MODULO);
};