// 1768. Merge Strings Alternately

const mergeAlternately = (word1, word2) => {
  let result = "";

  if (word1.length !== word2.length) {
    if (word1.length > word2.length) {
      for (let i = 0; i < word2.length; i++) {
        result += word1[i];
        result += word2[i];
      }
      console.log(word1.substring(word2.length, word1.length));
      result += word1.substring(word2.length, word1.length);
    } else {
      for (let i = 0; i < word1.length; i++) {
        result += word1[i];
        result += word2[i];
      }
      console.log(word2.substring(word1.length, word2.length));

      result += word2.substring(word1.length, word2.length);
    }
  } else {
    for (let i = 0; i < word1.length; i++) {
      result += word1[i];
      result += word2[i];
    }
  }

  return result;
};

console.log(mergeAlternately("abcd", "pq"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abc", "pqr"));
