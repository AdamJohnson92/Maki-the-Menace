var cardEl = document.querySelectorAll(".card")
var petMaki = function() {
    var petHer = window.confirm("Will you pet Maki and give her treats?")
    if (petHer) {
        window.alert("Maki is pleased.")
    } else {
        window.alert("Maki is displeased. You are in danger. Run.")
    }
    return;
}

var petMakiBtn = document.querySelector(".page-title")
petMakiBtn.addEventListener("click",petMaki);