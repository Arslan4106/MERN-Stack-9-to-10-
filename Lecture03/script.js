// Lecture No: 03
// if else Statement
// if(condition){

// }else{

// }
// Write a program to find a greater between two numbers.
let a = 45;
let b = 78;
// let a = prompt("Enter first Number:");
// let b = prompt("Enter second Number: ");
if (a > b) {
  console.log("a is greater than b", "(", a, "Vs", b, ")");
} else {
  console.log(" b is greater than a: ", "(", a, "Vs", b, ")");
}
// Nested If
// Write a program to find the Greater between three numbers using nested if statement
let num1 = 400;
let num2 = 444;
let num3 = 67;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(
      "Num1 is greater between three numbers:",
      "(",
      num1,
      "Vs",
      num2,
      "Vs",
      num3,
      ")"
    );
  } else {
    console.log(
      "Num3 is greater between three numbers:",
      "(",
      num1,
      "Vs",
      num2,
      "Vs",
      num3,
      ")"
    );
  }
} else {
  if (num2 > num3) {
    console.log(
      "num2 is greater between three numbers: ",
      "(",
      num1,
      "Vs",
      num2,
      "Vs",
      num3,
      ")"
    );
  } else {
    console.log(
      "num3 is greater between three Numbers:",
      "(",
      num1,
      "Vs",
      num2,
      "Vs",
      num3,
      ")"
    );
  }
}
// if, else-if statement
let marks = 86;
if (marks >= 90 && marks <= 100) {
  // (F && T = F)
  // (T && T = T)
  console.log("A+");
} else if (marks >= 80 && marks < 90) {
  console.log("A");
} else if (marks >= 70 && marks < 80) {
  console.log("B+");
} else if (marks >= 60 && marks < 70) {
  console.log("B");
} else if (marks >= 50 && marks < 60) {
  console.log("C");
} else {
  console.log("You are Fail");
}
