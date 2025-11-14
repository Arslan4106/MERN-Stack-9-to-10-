// 1. Values and Variables
const country = "Pakistan";
const continent = "Asia";
let population = 40;
console.log(country, continent, population);

// 2. Data Types
let isIsland = false;
const language = "Urdu";
console.log(typeof isIsland, typeof language);
console.log(typeof country, typeof population);

// 3. Let, Const and var
// country = "KPK";
console.log(country);

// 4. Basic Operators
population = population / 2;
console.log(`${population} million people will live in each half`);
population++;
console.log(population);
let finlandPopulation = 6;
if (population > finlandPopulation) {
  console.log(
    `${country} has more population than Finland: ${population} Vs ${finlandPopulation}`
  );
}
let avgPopulation = 33;
if (population > avgPopulation) {
  console.log(
    `No My Country does not have less population than the specific country: ${population} Vs ${avgPopulation}`
  );
}

let description =
  country +
  " " +
  "is in" +
  " " +
  continent +
  ", " +
  "and its" +
  " " +
  population +
  " " +
  "million People speak" +
  " " +
  language;
console.log(description);

let descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);
// if-else Statement
if (population > 33) {
  console.log(`${country}'s population is above the Average`);
} else {
  let belowAvg = 33 - population;
  console.log(`${country}'s Population is ${belowAvg} million below Average`);
}

// Type Conversion and Type Coercion
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17); // "6" + 17
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
