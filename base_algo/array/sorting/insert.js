const insertSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  return arr;
};

// const arr = [2, 4, 0, 1, 0, 1, 3, 5];

// console.log("Before sort:", arr);
// console.log("After sort:", insertSort(arr));
