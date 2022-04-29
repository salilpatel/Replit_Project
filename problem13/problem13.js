function nthTerm(){
  let num = parseInt(document.getElementById("num").value);
  let res = num * (num+1)
  document.getElementById("result").innerHTML = res;
}