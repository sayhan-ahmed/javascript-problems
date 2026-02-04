//  Problem 7: Prime Number Check

// Write a function that checks if a number is prime (only divisible by 1 and itself).

// - Example:
// - Input: 11
// - Output: true
// - Input: 12
// - Output: false

// === Method 1 === //
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

// === Method 2 === //
function isPrimeOptimized(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrimeOptimized(13));
console.log(isPrimeOptimized(14));

// === Method 3 === //
function isPrime6k(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log(isPrime6k(19));
console.log(isPrime6k(20));
