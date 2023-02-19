
// FYI, dimension de la fenêtre:
//      Windows X : 1920
//      Windows Y : 969

// Récupérer les Divs dans le DOM
var logo = document.getElementById("social");
var xDiv = document.getElementById("x");
var yDiv = document.getElementById("y");

// Synchronisation souris / logo
this.document.onmousemove = function(event)
{

    // Calcul de la position du logo
    x = Math.round((event.clientX- 150));
    y = Math.round((event.clientY - 150));

    // Changement de la position du logo
    logo.style.top =  y + "px";
    logo.style.left = x + "px";

    // Affichage des coordonnées du logo
    xDiv.innerHTML = "X : " + x;
    yDiv.innerHTML = "Y : " + y;

}