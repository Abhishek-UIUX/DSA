// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";
  let prefix = "";
  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];

  for (let i = 0; i < first.length; i++) {
    if (first[i] != last[i]) {
      break;
    }
    prefix += first[i];
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flightss"]));
