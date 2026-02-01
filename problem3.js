// ===== Problem 3: Find the Largest Number =====

// Write a function to find the largest number in an array.

// - Example:
// - Input: [1, 5, 3, 9, 2]
// - Output: 9

// === Method 1 === //
function isLarge(array) {
  let bigNum = array[0];
  for (let n = 1; n < array.length; n++) {
    if (array[n] > bigNum) {
      bigNum = array[n];
    }
  }
  return bigNum;
}

const numbers = isLarge([1, 5, 3, 9, 2]);

console.log(numbers);

// === Method 2 === //
function isBig2(array) {
  let bigNum = array[0];
  for (const arr of array) {
    if (arr > bigNum) {
      bigNum = arr;
    }
  }
  return bigNum;
}

console.log(isBig2([1, 4, 28, 9, 10, 39, 49]));
