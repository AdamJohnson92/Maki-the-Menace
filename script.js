var petMakiBtn = document.querySelector("#pet-maki-img")
//var cardEl = document.querySelectorAll(".card")
var cardBackArray = document.querySelectorAll(".face-down")
var petStartCounter = document.querySelector("#counter")
var petCounter = 0;

var petMaki = function() {
   
    var petHer = window.confirm("Will you pet Maki?")
    if (petHer) {
        window.alert("Maki is pleased.");
        petCounter++;
        console.log(petCounter)
        petStartCounter.textContent = petCounter;
    } else {
        window.alert("Maki is displeased. You are in danger. Run.")
    }
    return;
}

petMakiBtn.addEventListener("click",petMaki);


var cardFlip = function(event) {
    var element = event.target;
    if (element.matches(".face-down")) {
        element.style.zIndex = "0";
        element.style.scale = "96%"
    }
}

for (let i = 0; i < cardBackArray.length; i++) {
    console.log(cardBackArray[i]);
    cardBackArray[i].addEventListener("click",cardFlip)
}
//console.log(cardBack)