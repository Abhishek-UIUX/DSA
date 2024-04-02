const findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let current = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Reset current max if value at current index is zero, increment otherwise.
      current = (nums[i] === 0) ? 0 : current + 1;
      
      // Store current max to max, if current iteration found max consecutive 1s.
      max = (current > max) ? current: max;
    }
  
    return max;
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
