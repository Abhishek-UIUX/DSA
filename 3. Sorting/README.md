# Sorting In JavaScript

### Sort an Array
```javascript
const arr = [-2, -7, 1000, 5]
console.log(arr.sort()) // -2, -7, 1000, 5
console.log(arr.sort((a, b) => a - b)) // -7, -2 , 5, 1000
console.log(arr.sort((a, b) => b - a)) // 1000, 5, -2, -7

const strArr = ["mango", "apple", "banana"]
console.log(strArr.sort()) // "apple", "banana", "mango"
```

### Sort a String
```javascript
const str = "Abhishek"
console.log(str.split("").sort().join("")) // "Abehhiks
```

### Bubble Sort In JavaScript
```javascript
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

```