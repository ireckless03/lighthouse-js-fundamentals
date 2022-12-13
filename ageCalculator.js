// create a function to determine someone's age.
// define function ageCalculator with 3 parameters
// name, year of birth, and current year
// ageCalculator should return a string "Suzie is x years old"
const ageCalculator = function (name,birthYear,currentYear){
  let age= currentYear-birthYear
  return (name + " is " + age +" years old.")
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Denny", 1994, 2022))