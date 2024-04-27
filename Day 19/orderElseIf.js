/* Order of if...else if Statements */

function orderMyLogic(val) {
    if (val < 10) {
      return "Less than 10 !";
    } else if (val < 5) {
      return "Less than 5 !";
    } else {
      return "Greater than or equal to 10 !";
    }
  }
  
  function orderMyLogicAgain(val){
    if(val<5){
      return "Less than 5 !";
    } else if (val<10){
      return "Less than 10 !";
    } else {
      return "Greater than or equal to 10 !";
    }
  }
  
  let orderA = orderMyLogic(3);
  let orderB = orderMyLogicAgain(3);
  
  console.log("\n\n Wrong Order Result    : " + orderA);
  console.log("\n Correct Order Result  : " + orderB);