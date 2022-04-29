function month(){
  let month = parseInt(document.getElementById("num").value);
  let z;
  switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      z = 31;
      break;
    case 2:
      z = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      z = 30
      break;
    default:
      z = "Error"
      break;
  }
  
  let str;
  if(month == 1){
    str = "st";
  }
  else if(month == 2){
    str = "nd";
  }
  else if(month == 3){
    str = "rd";
  }
  else{
    str = "th";
  }
  
  document.getElementById("mon").innerHTML = "Number of days in the " + month + str.sup() +" month of a year is : " + z;
}