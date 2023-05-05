var petMakiBtn = document.querySelector(".page-title")
//var cardEl = document.querySelectorAll(".card")
var cardBackArray = document.querySelectorAll(".face-down")

var petMaki = function() {
    var petHer = window.confirm("Will you pet Maki and give her treats?")
    if (petHer) {
        window.alert("Maki is pleased.")
    } else {
        window.alert("Maki is displeased. You are in danger. Run.")
    }
    return;
}

petMakiBtn.addEventListener("click",petMaki);


var cardFlip = function(event) {
    var element = event.target;
    if (element.matches(".face-down")) {
        element.style.zIndex = "0"
    }
}

for (let i = 0; i < cardBackArray.length; i++) {
    console.log(cardBackArray[i]);
    cardBackArray[i].addEventListener("click",cardFlip)
}
//console.log(cardBack)