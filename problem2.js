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

// Method 4

function checkEvenOdd(num) {
  return num % 2 === 0 ? "The 4th number is Even" : "The 4th number is Odd";
}
console.log(checkEvenOdd(10));

// Method 5 : Bitwise AND

const number5 = 11;

if (number5 & 1) {
  console.log("The 5th number is Odd");
} else {
  console.log("The 5th number is Even");
}

// or

function checkEvenOdd2(num) {
  return (num & 1) === 0 ? "The 5th number is Even" : "The 5th number is Odd";
}
console.log(checkEvenOdd2(11));

// Method 6 : Object Mapping

function checkEvenOdd(num) {
  const result = { 0: "The 6th number is Even", 1: "The 6th number is Even" };
  return result[num % 2];
}
console.log(checkEvenOdd(12));

// Method 7 : Array Indexing

function checkEvenOdd3(num) {
  return ["The 7th number is Even", "The 7th number is Odd"][Math.abs(num % 2)];
}
console.log(checkEvenOdd3(13));

// Method 8 : Logical Falsy Shorthand

const checkEvenOdd4 = (num) =>
  num % 2 ? "The 8th number is Odd" : "The 8th number is Even";
console.log(checkEvenOdd4(14));
