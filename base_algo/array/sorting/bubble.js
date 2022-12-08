const bubbleSort = (arr) => {
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) swap(arr, j, j + 1);
    }
  }
  return arr;
};

// const arr = [3, 4, 2, 0, 0, 1];
// console.log("Before sort: ", arr);
// console.log("After sort: ", bubbleSort(arr));
