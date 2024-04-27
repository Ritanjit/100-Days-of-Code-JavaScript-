// Using two if loops...
function or(value){
    if(value<=100){
      return true;
    }
    if(value>=200){
      return true;
    }
    return false;
  }
  
  // Using boolean operators...
  function orLogic(value){
    if(value<=100 || value>=200){
      return true;
    }
    return false;
  }
  
  let ans1 = or(177);
  let ans2 = orLogic(177);
  
  
  console.log('\n\n\t    IS 177 LESS THAN 100 OR GREATER THAN 200 ?');
  console.log('\t\t(Using two if statements) : ' + ans1);
  console.log('\t\t(Using boolean operator)  : ' + ans2);
  