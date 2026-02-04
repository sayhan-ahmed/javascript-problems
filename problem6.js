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

// === Method 2 === //
function sumArray2(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    // total = total + array[i];
    total += array[i];
  }
  return total;
}
console.log(sumArray2([20, 30, 40]));

// === Method 3 === //
//Hardcoding — Not recommended //
const arrayNum = [30, 40, 50];

const firstNum = arrayNum[0];
const secondNum = arrayNum[1];
const thirdNum = arrayNum[2];

const total = firstNum + secondNum + thirdNum;

console.log(total);

// === Method 4 === //
// == We can do the above simply by destructuring == //
const arrayNum2 = [30, 40, 50];
const [firstNum2, secondNum2, thirdNum2] = arrayNum;

const total2 = firstNum2 + secondNum2 + thirdNum2;

console.log(total2);
