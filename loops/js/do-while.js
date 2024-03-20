function getRandomNumber(upper){
    return Math.floor(Math.random() * upper ) + 1;
}
 let counter = 0;
 do{
    console.log(`the random number is ${getRandomNumber(10)}`);
 } while ( counter < 10 );