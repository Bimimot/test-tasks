// Given two strings needle and haystack
// return the index of the first occurrence of needle in haystack
// or - 1 if needle is not part of haystack.

// simple decision
var strStr = function (haystack, needle) {
  const nLen = needle.length;
  for (let i = 0; i <= haystack.length - nLen; i++) {
    for (let j = 0; j <= nLen; j++) {
      if (needle[j] === haystack[i + j]) {
        if (j === nLen - 1) return i;
      } else break;
    }
  }
  return -1;
};

// brute force decision
var strStr = function (haystack, needle) {
  const nLen = needle.length;
  for (let i = 0; i <= haystack.length - nLen; i++) {
    let str = "";
    for (let j = i; j < i + nLen; j++) {
      str += haystack[j];
    }
    if (str == needle) {
      return i;
    }
  }
  return -1;
};

