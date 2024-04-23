/* Basic idea of queues in JavaScript */

function queue(array,item){

    let newItemAdded = array.push(item);   // new item added to back of array
  
    let oldItemRemoved = array.shift(array[0]);  // oldest item removed from front of array
  
    return ("Wrong prediction : " + oldItemRemoved);
  
  }
  
  let sampleArr = [2,0,4,1,1,0];
  
  console.log("\n\nExpected Runs This Over : " + JSON.stringify(sampleArr));
  
  console.log(queue(sampleArr,6)); 
  
  console.log("Actual Runs This Over : " + JSON.stringify(sampleArr));
  
  
  // TIP: JSON.stringify() converts object to strings.
  