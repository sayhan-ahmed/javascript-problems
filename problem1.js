// Write a function that takes two numbers and returns their sum, difference, product, and division.

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
