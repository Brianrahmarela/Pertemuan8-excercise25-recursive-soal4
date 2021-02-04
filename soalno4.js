function rangeAngka(n){
  if (n <=0 ){
    return 0;
  } else if (n >=1 && n <=15) {
    return 1;
  } else {
    return rangeAngka(n-15)+1;
  }
}

//TEST RANGE PARAM

//<=0
console.log(rangeAngka(0));

//1-15
console.log(rangeAngka(1));
console.log(rangeAngka(2));
console.log(rangeAngka(3));
console.log(rangeAngka(15));

//16-30
console.log(rangeAngka(16));
console.log(rangeAngka(17));
console.log(rangeAngka(18));
console.log(rangeAngka(30));

//31-45
console.log(rangeAngka(31));
console.log(rangeAngka(45));

//46-60
console.log(rangeAngka(46));
console.log(rangeAngka(60));

//61-75
console.log(rangeAngka(61));
console.log(rangeAngka(75));

//76-90
console.log(rangeAngka(76));
console.log(rangeAngka(90));


