function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }

  //recursion
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// const arr = [1, 3, 4, 5, 0, 2, 0];
// console.log("Before sort:", arr);
// console.log("After sort:", quickSort(arr));
