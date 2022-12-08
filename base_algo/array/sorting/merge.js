const merge = (leftArr, rightArr) => {
  const res = [];
  while (leftArr.length && rightArr.length) {
    res.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
  }
  return [...res, ...leftArr, ...rightArr];
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = arr.length / 2;
  const leftHalf = arr.splice(0, mid);

  //recursion here
  return merge(mergeSort(leftHalf), mergeSort(arr));
};

// const arr = [1, 3, 4, 5, 0, 2, 0];
// console.log("Before sort:", arr);
// console.log("After sort:", mergeSort(arr));
