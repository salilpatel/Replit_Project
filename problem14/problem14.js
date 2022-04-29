function myFunction(){
  
  let N = parseInt(document.getElementById("n").value);
  let K = parseInt(document.getElementById("k").value);

    K = K % N;

    let array = [];

    for(let i=0;i<N;i++){
      array[i] = prompt("Enter array element " + (i+1));
    }

    document.getElementById("arr").innerHTML = "Array before rotation : " + array;

    let newArray1 = [];
    let newArray2 = [];
    for(let i=0;i<N;i++){
     if(i >= K){
       newArray1[i-K] = array[i]
     }
      else{
        newArray2[i] = array[i]
        
      }

    let newArr = newArray1.concat(newArray2)
  
      document.getElementById("result").innerHTML = "Array after rotation is : " +         newArr;
      
    }
  

}