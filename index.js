// add solution here
function theBeatlesPlay(array1, array2){
  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  for(let i = 0; i < array1.length; i + 1){
    const strings = musicians[i] + ' plays ' + instruments[i]
    return strings
  }
}

theBeatlesPlay(musicians, instruments);
