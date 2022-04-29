function myFunction(){
  document.getElementById("default").innerHTML = "";
  document.getElementById("sorted").innerHTML = "";
  
  let str = String(document.getElementById("num").value)
  let count = [];
  
  for(let i=0;i<str.length;i++){
    count[i] = 0 ;
  }
  
  for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
      if(str[i] == str[j]){
       count[i] += 1;
      }
    }
  }

  let newMap = new Map()
  for(let i=0;i<str.length;i++){
    newMap.set(str[i],count[i])  
  }

  newMap.forEach((value,key) => {
    document.getElementById("default").innerHTML += key + ' : ' + value + " times<br>";
  })

  let sortedMap1 = new Map([...newMap.entries()].sort((a,b) => b[0] - a[0]));//sort key by decreasing order/

  let sortedMap2 = new Map([...sortedMap1.entries()].sort((a,b) => b[1] - a[1]));//sort value by decreasing order/
  
  sortedMap2.forEach((value,key) => {
    document.getElementById("sorted").innerHTML += key + ' ' ;
  })
}
