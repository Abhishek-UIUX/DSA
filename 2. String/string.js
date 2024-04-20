// String In JavaScript

//  Length of a String

let firstName = "Abhishek";
console.log(firstName.length);

// Access String Element

console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)

// Check Presence of Character

console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7

// Compare Two Strings

let anotherName = "Abhishek";
console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)

// Replace Substring

const str = "Abhishek is Best Frontend Developer. Abhishek is Best Developer. ";
console.log(str.replace("Abhishek", "Vijay")); // "Vijay is Best Frontend Developer. Abhishek is Best Developer. "
console.log(str.replaceAll("Abhishek", "Vijay")); // "Vijay is Best Frontend Developer. Vijay is Best Developer. "

// Substring of a String

console.log(str.substring(6, 30));
console.log(str.slice(-10, -1));

// Split and Join

console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));

// String Start and End

console.log(str.startsWith("Abhishek")); // true
console.log(str.endsWith("Developer")); // true

// Trim and Case Conversion

const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Convert Number and Object to String

const num = 123;
console.log(num, num.toString());

const obj = {
  name: "Abhishek",
  course: "DSA with Abhishek",
};
console.log(obj, JSON.stringify(obj));

// Concatenate Strings

const lastName = "Jaiswar";
console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));
