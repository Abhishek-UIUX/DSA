const removeElement = (nums, val) => {
  let k = 0; // Variable to keep track of non-val elements

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // If the current element is not equal to val,
      // move it to the position k and increment k
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 2));
