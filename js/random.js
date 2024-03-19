function getRandomNumber (upper , lower ){
    if ( isNaN(lower)|| isNaN(upper)){
        throw Error('both arguments must be number.');
    }
 return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
 
alert( getRandomNumber (1, 10) );
alert( getRandomNumber (20,60) );