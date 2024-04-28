
/* Less Code More Eficiency */

function lessCode(a,b){
    return a<b;
  }
  
  function moreCode(a,b){
    if(a<b){
      return true;
    } else {
      return false;
    }
  }
  
  let less = lessCode(10,15);
  let more = moreCode(15,10);
  
  console.log("\nEfficient  Code : " + less);
  console.log("More Code : " + more);
  
  // TIP: All comparison operators return a boolean true of false. 
  
  