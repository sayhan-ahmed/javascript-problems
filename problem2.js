// Method 1

const number = 7;

if (number % 2 === 0) {
  console.log("The 1st number is Even");
} else console.log("The 1st number is Odd");

// Method 2

const number2 = 8;
number2 % 2 === 0
  ? console.log("The 2nd number is Even")
  : console.log("The 2nd number is Odd");

// Method 3

function isEven(num) {
  if (num % 2 === 0) {
    console.log("The 3rd number is Even");
  }
  console.log("The 3rd number is odd");
}
const number3 = isEven(9);

