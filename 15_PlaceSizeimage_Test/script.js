
// Récupérer les éléments du DOM
logo = document.getElementById("social");
xDiv = document.getElementById("x");
yDiv = document.getElementById("y");
deltaDiv = document.getElementById("delta");

// Détection move mouse
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

// Détection click mouse
this.document.onclick = function(event)
{
    // Création du Div print
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "print");
    document.getElementById("screen").appendChild(newDiv);

    // Préparation du print
    newImage = document.createElement("img");
    newImage.setAttribute("src", "images/iWhite.png");
    newImage.style.width = taille + "px";
    newImage.style.height = taille + "px";
    newDiv.appendChild(newImage);

    // Positionnement du print
    newDiv.style.top =  y + "px";
    newDiv.style.left = x + "px";
}

// Détection scroll mouse
this.document.onmousewheel = function(event)
{
    // Récupération du scroll souris
    d = Math.round((event.wheelDelta));
    
    // Calcul de la taille du logo
    if (d==120)
    {
        taille += pas;
    }
    if (d==-120)
    {
        taille -= pas;
    }

    // Changement de la taille du logo
    ib.style.width = taille + "px";
    ib.style.height = taille + "px";

    // Affichage des coordonnées du logo
    deltaDiv.innerHTML = "Delta : " + taille + "px";
}

function init()
{
    // Initialisation des variables
    taille = 200;
    pas = 5;

    // Définition de la taille initialle du logo
    ib = document.getElementById("iblack");
    ib.style.width = taille + "px";
    ib.style.height = taille + "px";
}