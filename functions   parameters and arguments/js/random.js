function getRandomNumber(upper){
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
}
console.log( getRandomNumber (10) );
console.log ( getRandomNumber (100) );





