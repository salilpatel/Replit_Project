function convert(){
  let cel = parseInt(document.getElementById("temp").value);
  let far = (1.8*cel) + 32;
  document.getElementById("result").innerHTML = far;
}