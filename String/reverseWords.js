// 151. Reverse Words in a String

const reverseWords = (s) => {
  let temp = s.split(" ");
  let temp2 = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length > 0) {
      temp2.push(temp[i]);
    }
  }
  return temp2.reverse().join(" ").trim();
};

console.log(reverseWords("a good   example"));
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
