let oldValue = 0
let newValue = 0
window.addEventListener('scroll', (e) => {
newValue = window.pageYOffset;

function turnBlack() {
    var x, i;
    x = document.querySelectorAll(".link");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "black";
    }
}

function turnWhite() {
    var x, i;
    x = document.querySelectorAll(".link");
    for (i = 0; i < x.length; i++) {
        x[i].style.color = "white";
    }
}

if (oldValue < newValue) {
    document.getElementById("navbar").style.position = "absolute";

}
if (oldValue > newValue) {
    document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.9)";
    document.getElementById("navbar").style.position = "fixed";
    document.querySelector("#navbar a").style.color = "black";
    turnBlack();
}
if (window.scrollY==0) {
    document.getElementById("navbar").style.background = "transparent";
    document.querySelector("#navbar a").style.color = "white";
    turnWhite();
}
oldValue = newValue;
});