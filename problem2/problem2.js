function cube(){
  let no = parseInt(document.getElementById("num").value);
  let ans = no*no*no;
  document.getElementById("ans").innerHTML = ans;
}