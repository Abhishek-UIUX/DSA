// 344. Reverse String

const reverseString = (s) => {
  return s.reverse();
};
const reverseString2 = (s) => {
  let fp = 0;
  let lp = s.length - 1;

  while (fp < lp) {
    let temp = s[fp];
    s[fp] = s[lp];
    s[lp] = temp;

    fp++;
    lp--;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString2(["h", "e", "l", "l", "o"]));
