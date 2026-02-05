// ===== Problem 8: Filter Positive Numbers =====

// Given an array, create a new array containing only the positive numbers.

// - Example:
// - Input: [-2, 5, 0, -8, 12]
// - Output: [5, 12]

const numbers = [-2, 5, 0, -8, 12];

let positiveNum = [];
for (const num of numbers) {
  if (num > 0) {
    positiveNum.push(num);
  }
}
console.log(positiveNum);
