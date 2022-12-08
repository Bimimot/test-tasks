const selectSort = (arr) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) swap(arr, minIndex, i);
  }

  return arr;
};

// const arr = [1, 3, 4, 5, 0, 2, 0];
// console.log("Before sort:", arr);
// console.log("After sort:", selectSort(arr));