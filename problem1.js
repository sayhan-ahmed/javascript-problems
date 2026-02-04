// ===== Problem 1: Basic Arithmetic =====

// Write a function that takes two numbers and returns their sum, difference, product, and division.

// - Example:
// - Input: 5, 4
// - Output: [9, 1, 20, 1.25]

// === Method 1 === //
function calc(a, b) {
  const sum = a + b;
  const diff = a - b;
  const prod = a * b;
  const div = a / b;

  return [sum, diff, prod, div];
}
const numbers = calc(5, 4);

// console.log(numbers); // Output: [9, 1, 20, 1.25]

console.log(
  `The sum is ${numbers[0]};
The difference is ${numbers[1]};
The product is ${numbers[2]};
The division is ${numbers[3]}`
);

// === Method 2 === //
function calc2(a, b) {
  return {
    sum: a + b,
    diff: a - b,
    prod: a * b,
    div: a / b,
  };
}

const result = calc2(9, 6);
console.log(`The sum is ${result.sum}`);
console.log(`The difference is ${result.diff}`);
console.log(`The product is ${result.prod}`);
console.log(`The division is ${result.div}`);

// === Method 3 === //
function calcArray(a, b) {
  return [a + b, a - b, a * b, a / b];
}
const [sum, diff, prod, div] = calcArray(12, 4);

console.log(
  `Sum is ${sum}; Difference is ${diff}; Product is ${prod}; Division is ${div}`
);

// === Method 4 === //
const calcShort = (a, b) => ({
  sum4: a + b,
  diff4: a - b,
  prod4: a * b,
  div4: a / b,
});

const { sum4, diff4, prod4, div4 } = calcShort(10, 2);
console.log(
  `Sum is ${sum4}; Difference is ${diff4}; Product is ${prod4}; Division is ${div4}`
);
