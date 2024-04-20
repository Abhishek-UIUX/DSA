// 28. Find the Index of the First Occurrence in a String

const findFirstOccurence = (haystack, needle) => {
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle === haystack.substring(i, i + needle.length)) {
        return i;
      }
    }
  }
  return -1;
};

const findFirstOccurence2 = (haystack, needle) => {
  return haystack.indexOf(needle);
};
