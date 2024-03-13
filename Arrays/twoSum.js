// using brute-force
var twoSumA = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      var sumvalue = nums[i] + nums[j];
      if (sumvalue == target) {
        console.log(i, j);
        return [i, j];
      }
    }
  }
};

twoSumA([3, 2, 4], 6);

// using  hashmap to reduce time complexity from O(n^2) to O(n)

function twoSumB(nums, target) {
  // Create a hash table to store the indices of visited numbers
  const numIndices = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
    console.log(complement);
    // Check if the complement is already in the hash table
    if (numIndices.hasOwnProperty(complement)) {
      // Return the indices of the two numbers
      return [numIndices[complement], i];
    }

    // Add the current number and its index to the hash table
    numIndices[currentNum] = i;

    console.log(numIndices);
  }

  // If no solution is found, return an empty array or handle accordingly
  return [];
}

let result = twoSumB([3, 2, 4], 6);
console.log(result);

// using Map
var twoSumC = function (nums, target) {
  let i = 0;
  let n = nums.length - 1;
  const ht = new Map();
  while (i < n) {
    const other = target - nums[i];
    if (ht.has(other)) break;
    ht.set(nums[i], i);
    ++i;
  }
  return [ht.get(target - nums[i]), i];
};

let result2 = twoSumC([3, 2, 4], 6);
console.log(result2);
