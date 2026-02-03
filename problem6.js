// ===== Problem 6: Array Total Sum =====

// Given an array of numbers, calculate the total sum of all elements.

// - Example:
// - Input: [10, 20, 30]
// - Output: 60

// === Method 1 === //
function sumArray(array) {
  let total = 0;
  for (const arr of array) {
    total = total + arr;
  }
  return total;
}
console.log(sumArray([10, 20, 30]));
