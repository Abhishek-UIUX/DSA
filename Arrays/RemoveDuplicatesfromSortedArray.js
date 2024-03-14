// Remove Duplicates from Sorted Array

// 2 pointer method
var removeDuplicatesB = function (nums) {
  if (nums.length == 0) {
    return 0;
  }

  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    const element = nums[j];
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicatesB([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
