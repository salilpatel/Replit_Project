function factorial(n){
  let fact = 1;
  for(let i=1; i<=n; i++){
    fact = fact*i
  }
  return fact;
}
let N = Number(prompt("Enter N: "))
console.log(factorial(N))