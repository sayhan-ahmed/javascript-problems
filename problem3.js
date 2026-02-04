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

// === Method 3 === //
const numbers3 = [1, 5, 3, 9, 2, 7, 32, 34, 8, 2, 4];
const largest = Math.max.apply(null, numbers3);

console.log(largest);

// === Method 4 === //
function getMaxWithReduce(arr) {
  return arr.reduce((max, current) => {
    return current > max ? current : max;
  }, arr[0]);
}

console.log(getMaxWithReduce([4, 2, 5, 3, 8, 1, 4]));
