function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

 let counter = 0;
 while( counter < 100 ){
    console.log(getRandomNumber(10));
   counter += 3;
 }