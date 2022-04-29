function totalSum(){
  let num = parseInt(document.getElementById("num").value);
  let sum = 0 ;
  for(let i=1;i<=num;i++){
    sum += i;
  }
  document.getElementById("result").innerHTML = "The sum values from 1 to " + num + " is : " + sum;
}