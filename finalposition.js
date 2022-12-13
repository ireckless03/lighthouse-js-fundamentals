// strings are N,S,W,S change to represent Y and X axis
// Y for north/south and X for east/west
const moves = ['north', 'north', 'west', 
'west', 'north', 'east','north']  
//X-Y grid
const  finalPosition = function (moves){
  let position = []; 
  let x = 0;
  let y = 0;
  for (const move of moves){
  if (move === "north"){
    y++;

  } else if (move === "south"){
    y--;

  } else if (move === "west"){
    x--;

  } else {
    x++;
  }
}
  position.push(x,y);
  return position;
}
console.log(finalPosition(moves));