
/* Golf Game in JavaScript */

// Scores in golf...
const SCORES = ["HOLE-IN-ONE !!!","Eagle !!","Birdie !","Par :)","Bogey :(","Double Bogey :((","Go Home ╥﹏╥"];

// Function to find score...
function findScore(par,strokes){
  if(strokes==1){
    return SCORES[0];
  }else if(strokes<=par-2){
    return SCORES[1];
  }else if(strokes==par-1){
    return SCORES[2];
  }else if(strokes==par){
    return SCORES[3];
  }else if(strokes==par+1){
    return SCORES[4];
  }else if(strokes==par+2){
    return SCORES[5];
  }else{
    return SCORES[6];
  }
}

// Players in game...
let playerA = findScore(13,2);
let playerB = findScore(13,13);
let playerC = findScore(13,1);
let playerD = findScore(13,19);
let playerE = findScore(13,15);

// Displaying the score card...
console.log("\n\t\t  --- GULF GOLF 2K24 ---");
console.log("\t\t( HOLE 1 )");
console.log("\t\tM Pough    : " + playerC);
console.log("\t\tP Monroe   : " + playerA);
console.log("\t\tJ Shaw     : " + playerB);
console.log("\t\tA James    : " + playerE);
console.log("\t\tB Anderson : " + playerD);



















console.log('\n\n\n')


