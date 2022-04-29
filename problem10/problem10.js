
function portal(){
  var arrSize = parseInt(document.getElementById("arraySize").value);
  var arrGauntlet = [];
    
  for(let i=0;i<arrSize;i++){
    arrGauntlet[i] = Number(prompt("Enter array element " + (i+1)));
  }
  
  document.getElementById("showGauntlet").innerHTML = arrGauntlet;

  for(let i=0;i<arrSize;i++){
    let swap;
    if(i%2 == 0){
      for(j=i;j<arrSize;){
        if(arrGauntlet[i] > arrGauntlet[j]){
          swap = arrGauntlet[j];
          arrGauntlet[j] = arrGauntlet[i] ;
          arrGauntlet[i] = swap;
        }
        j += 2;
      }
    }
  }
  
  document.getElementById("solved").innerHTML = "Even index array elements sorted in ascending order : " + arrGauntlet;
  
}
  

