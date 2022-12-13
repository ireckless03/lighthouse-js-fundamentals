// write an array for stations including the name, capacity, 
//and type of station
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codevill Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
]

// good stations have 20 capacity
// must be school or community centre
function chooseStations(Stations){
  const goodStations= []
  for(const station of stations){
    const  capacity= station[1]

    
    if(capacity >= 20){

      const type = station[2]

      if (type === "school" || type === "community centre"){
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}
console.log(chooseStations(stations))