// use strict;
// Strings and Template Literals
const firstName = "Jonas";
const lastName = "Bob";
const currentJob = "Web Trainer";
const firstJob = "Web Developer";
const age = 2025 - 1999;
// String Cancatenation
console.log(
  firstName +
    " " +
    lastName +
    " " +
    "is a" +
    " " +
    age +
    " " +
    "years old" +
    " " +
    currentJob
);
const jonas =
  firstName +
  " " +
  lastName +
  " " +
  "is a" +
  " " +
  age +
  " " +
  "years old" +
  " " +
  currentJob;
console.log(jonas);
// Template Literals
const jonasNew = `${firstName} ${lastName} is a ${age} years old ${currentJob}`;
console.log(jonasNew);
console.log(`${firstName} ${lastName} is a ${age} years old ${currentJob}`);
// Type Conversion and Type Coercion
// number, string, boolean
// Type Conversion
const num1 = Number("23");
console.log(num1, typeof num1);
// const num2 = Number(prompt("Enter the Number:"));
// console.log(num2, typeof num2);
// Type Coercion
const a = 66;
const b = "50";
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
// Loose Equality Operator: (==)
// Loose Equality Operator use Type Coercion
const x = 45;
const y = "45";
if (x == y) {
  console.log("x is equal to Y");
} else {
  console.log("x is not Equal to y");
}
// Strict Equality Operator(===) does not use Type Coercion
if (x === y) {
  console.log("x is equal to Y");
} else {
  console.log("x is not Equal to y");
}
// Truthy and Falsy Values
// Falsy Values: 0, "", undefined, null, NaN
// Falsy Values will not be false itself, but they become false when we convert them into boolean.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
