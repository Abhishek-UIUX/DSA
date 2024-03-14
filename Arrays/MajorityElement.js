// using brute-force
const majorityElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
    if (count > Math.floor(nums.length / 2)) {
      return [nums[i]];
    }
  }

  return -1;
};

let result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result);

// using Optimal solution - HashMap

const majorityElementB = function (nums) {
  let newMap = new Map();
  let half = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    newMap[nums[i]] = (newMap[nums[i]] | 0) + 1;
    if (newMap[nums[i]] > half) {
      return nums[i];
    }
  }
  return -1;
};

console.log(majorityElementB([2, 2, 1, 1, 1, 1, 2, 2]));

// Most Optimal solution
const majorityElementC = function (nums) {
  let count = 0;
  let current = null;
  for (let i = 0; i < nums.length; i++) {
    if (current == nums[i]) {
      count++;
    } else {
      count--;
    }
    if (!current || count == 0) {
      current = nums[i];
      count = 1;
    }
  }
  return current;
};

console.log(majorityElementC([6, 5, 5]));
