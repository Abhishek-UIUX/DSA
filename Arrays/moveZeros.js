var moveZeroes = function (nums) {
  let nonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[nonZeroIndex++] = nums[i];
    }
  }
  for (let j = nonZeroIndex; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
