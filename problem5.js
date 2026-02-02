// ===== Problem 5: Reverse a String =====

// Write a program to reverse a string.

// - Example:
// - Input: "hello"
// - Output: "olleh"

// === Method 1 === //
const string = "hello";

const revString = string.split("").reverse().join("");

console.log(revString);

// === Method 2 === //
function revString2(string) {
  let reversed = "";
  for (const str of string) {
    reversed = str + reversed;
  }
  return reversed;
}
console.log(revString2("react"));

// === Method 3 === //
function revString3(string) {
  let reversed = "";
  for (let str = string.length - 1; str >= 0; str--) {
    reversed += string[str];
  }
  return reversed;
}

console.log(revString3("next"));
