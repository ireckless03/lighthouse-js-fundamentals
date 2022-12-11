//Logic helps learners decide which school they should attend based on age.
// Elementary if below 13, secondary if between 13-18, Lighthouse Labs in all other cases. Default school is home
// Define age
function whichSchool =(age)=> {
  if (age<13){
    return console.log("I'm "+age+". Which school should I go to?" /n "You should go to elementary school.")
  } else if (age>=13 && age<=18){
    return console.log("You should go to secondary school.")
  }
}
console.log(whichSchool(12));