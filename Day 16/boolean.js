/* Boolean Values in JavaScript */

function bestSport(sport){
    if(sport === 'football'){
      return true;
    }
    else{
      return false;
    }
  }
  
  console.log('\n Is Football the greatest sport ever ?');
  
  let answer = bestSport('football');
  
  console.log(" Yes! It is " + answer);
  
  // TIP: The string 'true' is different from true boolean value.
  
  