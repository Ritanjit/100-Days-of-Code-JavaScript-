
/* BlackJack in JavaScript */

let count = 0;

// card counting function (method 2)
function blackJack(card){
  if(card==2 || card==3 || card==4 || card==5 || card==6){
    count++;
  } else if(card==7 || card==8 || card==9){
    count=0;
  } else if(card==10 || card =='J' || card=='Q' || card=='K' || card=='A'){
    count--;
  } else{
    return 'INVALID CARD !';
  }
  console.log('\n\n\t\t  --LETS PLAY BLACKJACK--');
  console.log('\n\t\t\tCount : ' + count);
  if(count>0){
    console.log('\t\t    You Should BET !!');
    console.log('\n\t\t    Result : YOU WIN !');
  } else{
    console.log('\t\t    You Should HOLD !!');
    console.log('\n\t\t    Result : YOU WIN !');
  }
}

let a = blackJack('A');
count = 0;
let b = blackJack(2);
