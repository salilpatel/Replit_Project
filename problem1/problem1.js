function factorial(){
  let n = parseInt(document.getElementById("N").value);
  let fact = 1;
  for(let i=1; i<=n; i++){
    fact = fact*i
  }
  document.getElementById("fact").innerHTML = fact;
}