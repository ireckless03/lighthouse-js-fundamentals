// Each container holds exactly 100 bottles
// how many containers could be sent and filled
// write a function that determines how many hundreds can be made from a number
// use % operator
// take number / 100, round down to nearest whole number
// eg. 504 /100 = 5.04  Math.floor() method
// 
// containers can be sent if rounded number > 1

const howManyHundreds = function (bottles){
  if (bottles < 100) {
    return 0
  } else {
    let containers = Math.floor(bottles /100)
    return containers
  }
}
console.log(howManyHundreds(1000))
console.log(howManyHundreds(894))
console.log(howManyHundreds(520))
console.log(howManyHundreds(99))
console.log(howManyHundreds(0))