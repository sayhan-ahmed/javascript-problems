// ===== Problem 8: Filter Positive Numbers =====

// Given an array, create a new array containing only the positive numbers.

// - Example:
// - Input: [-2, 5, 0, -8, 12]
// - Output: [5, 12]

// === Method 1 === //
const numbers = [-2, 5, 0, -8, 12];

let positiveNum = [];
for (const num of numbers) {
  if (num > 0) {
    positiveNum.push(num);
  }
}
console.log(positiveNum);

// === Method 2 === //
const numbers2 = [-2, 5, 0, -8, 12, 47, 13, -13, 3];

const positiveNumbers = numbers2.filter((num) => num > 0);

console.log(positiveNumbers);

// === Method 3 === //
const numbers3 = [-21, 52, 0, -8, 12, 84, -1];
let positiveNum3 = [];

numbers3.forEach((num) => {
  if (num > 0) positiveNum3.push(num);
});
console.log(positiveNum3);
