// 977. Squares of a Sorted Array

const  sortedSquares = function(nums) {
    const sortedArray = [];
    for (let i = 0; i < nums.length; i++) {
        const absValue = Math.abs(nums[i]) * Math.abs(nums[i])
        sortedArray.push(absValue);
    }
    return sortedArray.sort((a,b)=> a - b)
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));

// Another approach

const  sortedSquares1 = function(nums) {
    let output = nums.map(num => num**2).sort((a,b) => a-b);

    return output;
};

console.log(sortedSquares1([-4,-1,0,3,10]));
console.log(sortedSquares1([-7,-3,2,3,11]));
