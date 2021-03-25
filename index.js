document.getElementById("jogador1");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImg = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", randomImg);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImg = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src", randomImg);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Jogador 1 Venceu!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Jogador 2 Venceu!"
}
else{
    document.querySelector("h1").innerHTML = "Empate!";
}