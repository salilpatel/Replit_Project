function area(){
  let a = parseInt(document.getElementById("side").value);
  let ans = 0.433*a*a;
  let area = Math.round(ans*100)/100;
  console.log(area)
  document.getElementById("result").innerHTML = area;
}