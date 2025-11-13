// Lecture No: 06
// For Loop
// for (initilization; condition; Inrement / decrement) {

// }
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
// Dry Run
// 1st Iteration
// i = 1;
// i <= 100 => 1 <= 100 (true)
// output: 1
// i = 2
// 2nd Iteration
// i = 2
// i <= 100 => 2 <= 100 (true)
// output: 2
// i = 3
// 3rd Iteration
// last Iteration
// i = 100;
// i <= 100 => 100 <= 100 => (true)
// output: 100
// i = 101
// 101 <= 100 (false)
for (let i = 1; i <= 100; i = i + 2) {
  console.log(i);
}

for (let i = 2; i <= 100; i++) {
  console.log(i);
  i++;
}
for (let i = 100; i >= 2; i--) {
  console.log(i);
  i--;
}
