function solution(){
  let a = parseInt(document.getElementById("A").value);
  let b = parseInt(document.getElementById("B").value);
  let c = parseInt(document.getElementById("C").value);
  
  let disc = b*b - 4*a*c ;
  let res1 = (-b + Math.sqrt(disc))/(2*a)
  let res2 = (-b - Math.sqrt(disc))/(2*a)

  let result1 = Math.round(res1*100)/100
  let result2 = Math.round(res2*100)/100

  document.getElementById("results").innerHTML = result1 + " and " + result2;
}