function findTerm(){
  let num = parseInt(document.getElementById("term").value);
    let ans = num * num;
  let str;
  
  switch(num){
    case 1:
      str = "st";
      break;
    case 2:
      str = "nd";
      break;
    case 3:
      str = "rd";
      break;
    default:
      str = "th";
  }
  
  if(num >= 0){
    document.getElementById("result").innerHTML = "The " + num + str.sup() + " term of the series is : " + ans;
  }
  else{
    document.getElementById("result").innerHTML = "Error"
  }
}