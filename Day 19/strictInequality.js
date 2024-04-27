// Setup
function testStrictNotEqual(val) {
    if (val!==99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);