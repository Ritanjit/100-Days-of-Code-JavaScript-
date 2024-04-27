
/* Ranges in Switch Case */

function regionsIndia(state){
    let region = ' ';
    switch(state){
      case "Jammu and Kashmir":
      case "Delhi":
      case "Punjab":
        region = 'North-India';
        break;
      case "Assam":
      case "Manipur":
      case "Arunachal Pradesh":
        region = 'East-India';
        break;
      case "Tamil Nadu":
      case "Kerala":
      case "Andaman and Nicobar":
        region = 'South-India';
        break;
      case "Gujarat":
      case "Maharastra":
      case "Karnataka":
        region = 'West-India';
        break;
      case "Madhya Pradesh":
      case "Uttar Pradesh":
      case "Jharkhand":
        region = 'Central-India';
        break;
      default :
        region = 'Get a map dummy !';
        break;
    }
    return region;
  }
  
  let a = regionsIndia('Assam');
  let b = regionsIndia('Tamil Nadu');
  let c = regionsIndia('Bangalore');
  let d = regionsIndia('Jammu and Kashmir');
  
  console.log('\n\t -- Regions of Indian States --');
  console.log('\t    Assam      : ' + a);
  console.log('\t    Tamil Nadu : ' + b);
  console.log('\t    Bangalore  : ' + c);
  console.log('\t    Kashmir    : ' + d);
  
  
  