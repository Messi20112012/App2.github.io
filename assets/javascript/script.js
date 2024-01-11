var back = document.getElementById("back");
var close = document.getElementById("close");
var download = document.getElementById("download");
var app1BtnDesk = document.getElementById("app1BtnDesk");
var app1Btn = document.getElementById("app1Btn")
var btnModal = document.getElementsByClassName("btnModal")
console.dir(btnModal)
console.dir(back);
function closeModal() {
    // Cache le modal à l'aide de CSS
    back.style.display = "none";


    // Réinitialise les variables

}
// Fonction de déploiement de la modale
function openModal() {
    // Affiche le modal à l'aide de CSS

    back.style.display = "block";

    // Réinitialise les variables

}
download.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
app1BtnDesk.addEventListener("click", openModal);
app1Btn.addEventListener("click", openModal);

btnModal[0].addEventListener("click",openModal);