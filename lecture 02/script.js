// Lecture No: 02
// let, const and var
// var:
// => We can Redeclare a variable with var keyword
var a = 45; // variable intitialization
var a;
console.log(a);
// => We can Reassign a variable with var keyword
a = 56;
console.log(a);
// => var is a Global Scope

// let:
// => We cannot redeclare a variable with let keyword
let b = 23; // variable initilization
// let b;
// => We can reassign a variable with let keyword
b = 46;
console.log(b);
// => let is a block scope

// const
// => we cannot redeclare variable with const keyword.
const c = 67;
// const c;
// => we Cannot resassign a variable with const keyword
// c = 89;
// => const is a block

var firstName = "John";
var lastName = "Steven";
let d = 56;
let e = 78;
const g = 45;
const h = 89;
if (h > g) {
  var k = 67; // var is a Global Scope
  let l = 44;
  const m = 33;
  console.log(a, b, c);
  console.log(firstName, lastName);
} else {
  console.log("Your Condition is False");
}
console.log(k);
// console.log(l);
// console.log(m);

// Operators in JS
console.log("--------Operators---------");
// => Arithmetic Operators
//    +, -, /, *, %
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

// => Assignment Operators
// =, +=, -=, *=, /=, ++, --
a += 24; // a = a + 24;
console.log(a);
a -= 10; // a = a - 10;
console.log(a);
a *= 2; // a = a * 2;
console.log(a);
a /= 2; // a = a / 2;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
// => Conditional Operators (Comparison Operators)
// >, >=, <, <=, == (Loose Equality Operator), === (Strict Equality Operator)
a = 45;
b = "45";
console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a === b);
// => Logical Operators
// AND (&&), OR(||), NOT(!), NAND, NOR
