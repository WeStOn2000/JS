let story = prompt("what is your name?");
let story2 = prompt("what is your favourite color?");
let story3 = prompt("what is your favourite anime?");
  let storymessage = `<h1>Well Hello ${story}!!!</h1><p> I disagree with your color ${story2} get a better  taste like purple.
  but i honestly love your color ${story2 } just kidding purple is my worst color.</p>
  But ${story3} sounds great i will add it to my watchlist Thank you for sharing!! 
  Have a great time!!`;
document.querySelector('main').innerHTML=storymessage;
