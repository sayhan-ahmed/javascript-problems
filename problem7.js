//  Problem 7: Prime Number Check

// Write a function that checks if a number is prime (only divisible by 1 and itself).

// - Example:
// - Input: 11
// - Output: true
// - Input: 12
// - Output: false

function isPrime(num) {
  if (num <= 1) return false;
  for (let n = 2; n <= Math.sqrt(num); n++) {
    if (num % n === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(11));
console.log(isPrime(12));
