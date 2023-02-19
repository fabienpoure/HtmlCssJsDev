
// Récupérer les Divs dans le DOM
logo = document.getElementById("social");
xDiv = document.getElementById("x");
yDiv = document.getElementById("y");

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

this.document.onclick = function(event)
{
    // Création du Div print
    newDiv = document.createElement("div");
    newDiv.setAttribute("class", "print");
    document.getElementById("screen").appendChild(newDiv);

    // Création de l'image print
    newImage = document.createElement("img");
    newImage.setAttribute("src", "images/iWhite.png");
    newDiv.appendChild(newImage);

    // Positionnement du Div/Image rint
    newDiv.style.top =  y + "px";
    newDiv.style.left = x + "px";
}