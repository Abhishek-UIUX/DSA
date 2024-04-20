// 58. Length of Last Word

const lengthOfLastWord = (s) => {
  let temp = s.trimEnd().split(" ");
  return temp[temp.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
