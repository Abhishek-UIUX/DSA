//242. Valid Anagram

const ValidAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(ValidAnagram("anagram", "nagaram"));
