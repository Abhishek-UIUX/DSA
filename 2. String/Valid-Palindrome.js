// 125. Valid Palindrome

const isPalindrome = (s) => {
  const filterNonAlphabet = (str) => {
    return str.replace(/[^0-9a-zA-Z]/g, "");
  };

  // Trim leading and trailing spaces from the input string
  s = s.trim();

  // Filter out non-alphabetic characters
  s = filterNonAlphabet(s);

  s = s.toLowerCase();

  return s === s.split("").reverse().join("");
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
