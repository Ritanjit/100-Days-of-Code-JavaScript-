
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
  if(count>0){
    console.log('Count : ' + count);
    console.log('You Should BET !!');
  } else{
    console.log('Count : ' + count);
    console.log('You Should HOLD !!');
  }
}

blackjack(3);



