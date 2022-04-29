function length(){
  
  let input = document.getElementById("string").value;
  let str = String(input);
  let len = 0;
  
  for(let i=0;i<str.length;i++){
    if(str[i] != " "){
     len += 1;
    }
  }
  
  let res;
  if(input < 0){
    res = "Error";
  }
  else if(input == 0){
    res = 0;
  }
  else{
    res = len;
  }
  
  document.getElementById("result").innerHTML = res;
  
}