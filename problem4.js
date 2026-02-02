// ===== Problem 4: Count Vowels =====

// Given a string, count how many vowels (a, e, i, o, u) it contains.

// - Example:
// - Input: "javascript"
// - Output: 3

// === Method 1 === //
function countVowels(string) {
  const stringLowerCase = string.toLowerCase();
  let vowelCount = 0;
  for (const str of stringLowerCase) {
    if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u")
      vowelCount++;
  }
  return vowelCount;
}
const string = countVowels("javascript");

console.log(string);

// === Method 2 === //
const stringSecond = "mother";
const strArray = [...stringSecond.toLowerCase()];

const vowels = strArray.filter((char) =>
  ["a", "e", "i", "o", "u"].includes(char)
);

console.log(vowels); // shows the vowels
console.log(vowels.length); // shows vowel counts

// === Method 3 === //
const stringThird = "I am going to school";
const strArray2 = [...stringThird.toLowerCase()].filter((c) =>
  "aeiou".includes(c)
);

console.log(strArray2.length);
