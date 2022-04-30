
function portal(){
  var arrSize = parseInt(document.getElementById("arraySize").value);
  var arrGauntlet = [];
    
  for(let i=0;i<arrSize;i++){
    arrGauntlet[i] = Number(prompt("Enter array element " + (i+1)));
  }
  
  document.getElementById("showGauntlet").innerHTML = arrGauntlet;
  let swap;
  for(let i=0;i<arrSize;){
      for(let j=i;j<arrSize;){
        if(arrGauntlet[i] > arrGauntlet[j]){
          swap = arrGauntlet[j];
          arrGauntlet[j] = arrGauntlet[i] ;
          arrGauntlet[i] = swap;
        }
        j += 2;
      }
    i += 2;
  }
  
  document.getElementById("solved").innerHTML = "Even index array elements sorted in ascending order : " + arrGauntlet;
  
}
  

