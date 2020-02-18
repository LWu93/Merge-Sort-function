function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length <= 1) {
    return wholeArray;
  }
  const mid = Math.ceil(wholeArray.length / 2);

  const firstHalf = wholeArray.slice(0, mid);
  const secondHalf = wholeArray.slice(mid);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let leftPointer = 0;
  let rightPointer = 0;
  let returnArr = []; //[1, 2, 3, 4]

  while (leftPointer <= arr1.length - 1 || rightPointer <= arr2.length - 1) {
    if (
      leftPointer <= arr1.length - 1 &&
      (arr1[leftPointer] <= arr2[rightPointer] ||
        rightPointer > arr2.length - 1)
    ) {
      returnArr.push(arr1[leftPointer]);
      leftPointer++;
    } else if (
      rightPointer <= arr2.length -1 &&
      (arr1[leftPointer] > arr2[rightPointer] || leftPointer > arr1.length - 1)) {
      returnArr.push(arr2[rightPointer]);
      rightPointer++;
    } else {
      console.log('something went wrong!');
    }
  }
  return returnArr
};

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }



  return arr
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return arr;
  }

  const mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  const arrayCopy = [...arr];

  let leftPointer = left;
  let rightPointer = mid + 1;
  let pointer = left;
  let cnt = 0;
  // console.log(arrayCopy, leftPointer, rightPointer, left, mid, mid+1, right)
  while (cnt++ < 10000 && (leftPointer <= mid || rightPointer <= right)) {
    if (
      leftPointer <= mid &&
      (arrayCopy[leftPointer] <= arrayCopy[rightPointer] ||
        rightPointer > right)
    ) {
      console.log('go left');
      arr[pointer] = arrayCopy[leftPointer];
      pointer++;
      leftPointer++;
    } else if (
      rightPointer <= right &&
      (arrayCopy[rightPointer] < arrayCopy[leftPointer] || leftPointer > mid)
    ) {
      console.log('go right');
      arr[pointer] = arrayCopy[rightPointer];
      pointer++;
      rightPointer++;
    } else {
      console.log(
        arrayCopy,
        leftPointer,
        rightPointer,
        left,
        mid,
        mid + 1,
        right
      );
      console.log('somethings wrong~~');
    }
  }

  return arr;
}
