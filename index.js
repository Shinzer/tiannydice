var randomNumber1 = Math.floor(Math.random() * 6) + 1;   
var randomImageSource1 = "dice" + randomNumber1 + ".png";   
$('img')[0].setAttribute("src", randomImageSource1); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "dice" + randomNumber2 + ".png";
$('img')[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    $('h1').text("🚩Player 1 Wins")
}
else if (randomNumber2 > randomNumber1) {
    $('h1').text("Player 2 Wins🚩")
}
else {
  $('h1').text("Draw!")
}
