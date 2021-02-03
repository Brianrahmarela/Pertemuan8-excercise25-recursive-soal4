function f(n){
  if(n == 0){
    return 0
  } else if (n >= 1 && n<=15) {
    f(n-1) 
    return 1
  } else if (n >= 16 && n<=30) {
    f(n-1) 
    return 2
  } else if (n >= 31 && n<=45) {
    f(n-1) 
    return 3
  }
}

//bila param dari 0
console.log(f(0))

//bila param dari 1-15
console.log(f(1))
console.log(f(7))
console.log(f(15))

//bila param dari 16-30
console.log(f(16))
console.log(f(20))
console.log(f(30))

//bila param dari 31-45
console.log(f(31))
console.log(f(40))
console.log(f(45))
