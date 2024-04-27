
/* Logical operators in Comparision */

// Using two if loops...
function and(value){
    if(value>=100){
      if(value<=200){
        return true;
      }
    }
    return false;
  }
  
  // Using boolean operators...
  function andLogic(value){
    if(value>=100 && value<=200){
      return true;
    }
    return false;
  }
  
  let ans1 = and(177);
  let ans2 = andLogic(177);
  
  console.log('\n\n\n\t\t IS 177 BETWEEN 100 AND 200 ?');
  console.log('\t\t(Using two if statements) : ' + ans1);
  console.log('\t\t(Using boolean operator)  : ' + ans2);
  
  
  