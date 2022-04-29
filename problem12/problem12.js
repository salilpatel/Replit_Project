function palCount(){
  
  let number = parseInt(document.getElementById("num").value);
  let palCount = 0;

  for(let i=1;i<=number;i++){
    let str = String(i)
    if(str == str.split('').reverse().join('')){
      palCount = palCount + 1;
    }
  }

  document.getElementById("result").innerHTML = palCount;
  
}