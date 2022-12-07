// You found two items in a treasure chest!
// The first item weighs weight1 and is worth value1, and the second item weighs weight2
// and is worth value2.What is the total maximum value of the items you can take with you,
// assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type,
// i.e.you can't take two first items or two second items.

// The shortest solution
function solution(value1, weight1, value2, weight2, maxW) {
  return Math.max(
    maxW >= weight1 && value1,
    maxW >= weight2 && value2,
    maxW >= weight1 + weight2 && value1 + value2
  );
}

// Universal solution for array
  function solution(value1, weight1, value2, weight2, maxW) {
    const arr = [
      { val: value1, w: weight1 },
      { val: value2, w: weight2 },
    ].map((item) => maxW >= item.w && item.val);

    return Math.max(maxW >= weight1 + weight2 && value1 + value2, ...arr);
  }

// More intersting case - you can bring as many items as you wish. What the maximum value in this case?
function solution(value1, weight1, value2, weight2, maxW) {
  let value = 0;
  const arr = [
    { val: value1, w: weight1 },
    { val: value2, w: weight2 },
  ].sort((a, b) => b.val - a.val || a.w - b.w);

  arr.forEach((item) => {
    while (maxW >= item.w) {
      value += item.val;
      maxW -= item.w;
    }
  });

  return value;
}

//console.log(solution(3, 5, 3, 8, 10));
// => 3 + 3 = 6
