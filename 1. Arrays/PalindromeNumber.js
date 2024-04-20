// 9. Palindrome Number

var isPalindrome = function(x) {
    let copyNumber = x , reverseNumber = 0 
    while(copyNumber > 0){
        const lastNumber = copyNumber%10 
        reverseNumber = reverseNumber*10 + lastNumber
        copyNumber = Math.floor(copyNumber/10)
    }
    return x === reverseNumber
};

console.log(isPalindrome(404));