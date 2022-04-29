function myFunction(){
  let pExp = document.getElementById("expression").value;
  let arrExp = pExp.split(' ')
  document.getElementById("write").innerHTML = arrExp;
  
  let newArray = []

  arrExp.forEach(function(o){
    if(o == '+' || o == '-' || o == '*' || o == '/' || o == '%'){
      let a = Number(newArray.pop());
      let b = Number(newArray.pop());
      let result = compute(a, o , b);
      newArray.push(result);
    }
    else{
      newArray.push(o);
    }
  })

  if(newArray.length == 1){
    document.getElementById("writeResult").innerHTML = "The answer to the above postfix expression is : " + newArray;
    }
  else{
    document.getElementById("writeResult").innerHTML = "<em>give a proper postfix expression (or) give <strong>single space</strong> between each number/operator</em>" + "<br><br><br>The answer to the above postfix expression is : " + newArray;   
  }

}

function compute(a, operator, b){
  if(operator == '+'){
    return b + a;
  }
  else if(operator == '-'){
    return b - a;
  }
  else if(operator == '*'){
    return b * a;
  }
  else if(operator == '/'){
    return b / a;
  }
  else if(operator == '%'){
    return b % a;
  }
}