// Truthy and Falsy Values
// falsy will not be false itself, but they become false when we convert them into boolean.
// There are six falsy values in js
// falsy Values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
let money = 0;
if (money) {
  // Type Coercion
  console.log("Do Not spend it");
} else {
  console.log("You did not have Money");
}

let height;
console.log(height);
if (height) {
  // Type Coercion
  console.log("You are Selected");
} else {
  console.log("You are Rejected");
}

console.log("Jonas Bob");
console.log(Boolean("Jonas"));

// The Ternary Operator
let a = 45;
let b = 67;
const jonas = a > b ? "a is greater than b" : "b is greater than a";
console.log(jonas);

// The Switch Statement
const day = Number(prompt("Enter Your Day Number:"));
// let day = 8;
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
  default:
    console.log("Enter the Correct Number between 1 and 7");
}
