// Sort an Array

const arr = [-2, -7, 1000, 5];
console.log(arr.sort()); // -2, -7, 1000, 5
console.log(arr.sort((a, b) => a - b)); // -7, -2 , 5, 1000
console.log(arr.sort((a, b) => b - a)); // 1000, 5, -2, -7

const strArr = ["mango", "apple", "banana"];
console.log(strArr.sort()); // "apple", "banana", "mango"

// Sort a String
const str = "Abhishek";
console.log(str.split("").sort().join("")); // "Abehhiks

// Algorithms

// Bubble Sort
// Time complexity: O(n^2).
// Space Complexity: O(1).
// Not suitable for large data sets as it is inefficient.

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr1 = [5, 9, 1, 10, 2, 7, 3, -2, -1, -4];
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swapped = true;
        swap(arr, j + 1, j);
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort(arr1));

// Insertion Sort
// Time complexity: O(n*2)
// Worst and average case time complexity: O(n*2). Best case time complexity: O(n).
// Space complexity: O(1).
const arr2 = [8, 4, 1, 5, 9, 2];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
}
console.log(insertionSort(arr2));

// Selection Sort
// Time complexity: O(n*2)
// Space Complexity: O(1).
// Suitable for small datasets or when memory space is limited.
const arr3 = [8, 4, 1, 5, 9, 2];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum_num = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum_num]) {
        minimum_num = j;
      }
    }
    if (minimum_num != i) {
      swap(arr, minimum_num, i);
    }
  }

  return arr;
}
console.log(selectionSort(arr3));
