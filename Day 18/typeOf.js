
/* Typeof operator in JavaScript */

function findType(value){
    return typeof(value);
  }
  
  let a = findType("ABCdefgh...");      // text
  
  let b = findType(23*99/56.44);        // numbers
  
  let marks = [23,44,56];               // arrays
  let c = findType(marks);
  
  let list = (88,'ritanjit');           // gives type of last element
  let d = findType(list);
  let list2 = (10,'hey',99);
  let e = findType(list2);
  
  let f = findType(findType);
  
  console.log('\n       --Data Types--\n ABCdefgh...\t : ' + a + '\n 23*99/56.44\t : ' + b + '\n [23,44,56]\t : ' + c + "\n (88,'ritanjit') : " + d + '\n (10,"hey",99)\t : ' + e + '\n findType() \t : ' + f);