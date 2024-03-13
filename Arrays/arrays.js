// Question 1 - how do you check if an element exists in array
let arr = [1, 2, 3, "hello", 5, { name: "john" }, [1, 2, 3]];

console.log(arr);

const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

console.log(findElement(arr, "hello"));
console.log(findElement(arr, "h"));

// Question 1 - how do you check if an element exists in array if present then return its index

const findElementIndex = (arr, target) => {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === target) {
      return x;
    }
  }
  return -1;
};

console.log(findElementIndex(arr, "hello"));
console.log(arr.indexOf("hello"));

// Question 2 How to delete , update , add from specific array

// DELETE
console.log(arr);
arr.splice(1, 4);
console.log(arr);

// ADD
arr.splice(1, 0, 3, 4, 5, 6, 7, 8, 9);
console.log(arr);

// UPDATE
arr.splice(1, 3, 6, 7, 8);
console.log(arr);

// Splice vs slice
// 1) splice changes the original array, where as slice does not change the original array.
// 2) splice returns removed elements, whereas slice does not return anything.

const newArr = arr.slice(1, 5);
console.log(newArr, arr);

// Copy of array

// Shallow copy of array
const shallowCopyArray = arr;
// if we change the new array then original array also gets change
shallowCopyArray.splice(1, 6);
console.log(shallowCopyArray, arr);

// Deep copy of array
const arrA = [...arr];
const arrB = Array.from(arr);
const arrC = arr.concat();
console.log(arrA.splice(1, 2));
console.log(arrB.splice(1, 3));
console.log(arrC.splice(1, 2));
console.log(arr);

// Question 3: how to add two array in javascript?
const newArrA = [1, 2, 3, "hello", 5, { name: "john" }, [1, 2, 3]];
const array2 = ["John", "Doe"];
const newArr2 = [...newArrA, ...array2];
console.log(newArr2);

// Question 4: How can you check if two arrays are equal?
const isArrayEqual = (arr1, arr2) => {
  // First approach to solve this
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //   }
  // }
  // return true;

  // Second approach to solve this
  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
};
console.log(isArrayEqual([1, 2, 3], [1, 2, 3]));

// Question 5: Sorting an array in ascending and descending order?
const x = [1, 4, 5, 0, -9, -4];
// ascending
x.sort();
console.log(x);

// descending
x.sort((b, a) => b - a);
console.log(x);

// Question 6: reverse array
const a = [1, 4, 5, 0, -9, -4];

a.reverse();
console.log(a);

// Question 6: Map, Filter & Reduce
const newArr3 = [1, 4, 5, 0, -9, -4];
const newMapArr = newArr3.map((num) => num * 2);
console.log(`New Array after mapping : ${newMapArr}`);

const positiveNumbers = newArr3.filter((ele, i) => ele > 0);
console.log(positiveNumbers);

const newReduce = positiveNumbers.reduce(
  (previous, current) => previous + current
);
console.log(newReduce);

// Flat an array

const q = [1, 2, 3, [4, 5, [6, 7]], 8, 9];
const flattedArray = q.flat(2);
console.log(flattedArray);

// Filter vs find
// Find will return the first element that satisfies the condition whereas filter returns all elements which satisfy the condition.
const positiveNumber = newArr3.find((ele, i) => ele > 0);
console.log(positiveNumber);

