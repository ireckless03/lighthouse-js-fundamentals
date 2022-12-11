//Write a program that prints numbers 100-200 to the console.
// If number is multiple of 3 print string "Loopy"
// If number is multiple of 4 print "Light house"
// If multiple of 3 and 4 print "LoopyLighthouse"

let x =0
for (x=100; x<=200; x++){
  if (x % 3===0) {
    console.log("Loopy")
  } else if (x %4===0) {
    console.log("Lighthouse")
  } else if ((x % 4===0) && (x % 3===0)){
    console.log("LoopyLighthouse")
  } else{ 
    console.log(x)
  }
}