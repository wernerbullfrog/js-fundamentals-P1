const exercise12 = require("./exercise-12");

function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for(i = 1; i<= 8; i++) {
    if(i%2 === 0) {
      console.log('_#_#_#_#')
  }else{
    console.log('#_#_#_#_')
  }
  }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}
exercise11()
// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11

module.exports = exercise11;

