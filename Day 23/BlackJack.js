
/* BlackJack in JavaScript */
let count = 0;
// Card counting function (method 1)
function blackjack(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      return 'INVALID CARD !';
  }
  
  console.log('\n\n\t\t  --LETS PLAY BLACKJACK--');
  if(count>0){
    console.log('\n\t\t\tCount : ' + count);
    console.log('\t\t    You Should BET !!');
    console.log('\n\t\t    Result : YOU WIN !');
  } else{
    console.log('\n\t\t\tCount : ' + count);
    console.log('\t\t    You Should HOLD !!');
    console.log('\n\t\t    Result : YOU WIN !');
  }
}

let a = blackjack('A');
count = 0;
let b = blackjack(2);


