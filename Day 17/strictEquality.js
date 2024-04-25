
/* Strict Equality (===) vs (==) Equality Operator */

function strictEquality(a){
    if(a==='100'){
      return "Equal !!";
    }
    return "Unequal !!";
  }
  
  function equality(a){
    if(a=='100'){
      return "Equal !!";
    }
    return "Unequal !!";
  }
  
  let ans1 = strictEquality(100);
  
  let ans2 = equality(100);
  
  console.log("\n Comparing number 100 with string '100' : ")
  console.log("\n (===) : " + ans1);
  console.log("\n (==)  : " + ans2);
  
  