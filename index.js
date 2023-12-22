var randomNumber1=Math.floor( Math.random() *6)+1;
var randomDiceImage="dice" + randomNumber1 + ".png";
// dice1.png -dice6.png
var randomImageSource="images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);


var randomNumber2=Math.floor( Math.random() *6)+1;

var randomImageSource2="images/dice" + randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 is win";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2 is win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

     