
/* Chaining If Else statements */

function testSize(num){
    if(num<100){
      return "Tiny !!";
    } else if(num<1000){
      return "Small !!";
    } else if(num<1500){
      return "Medium !!";
    } else if(num<2000){
      return "Large !!";
    } else {
      return "Huge !!";
    }
  }
  
  let result = testSize(1979);
  
  
  console.log("\n How big is 1979 ?\n");
  console.log(" It is " + result);
  