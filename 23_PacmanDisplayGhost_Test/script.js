
// Initialisation ghost_parent
divGhostParent = document.getElementById("ghost_parent");
    divGhostParent.style.position = "absolute";

// Initialisation ghost_child
divGhostChild = document.getElementById("ghost_child");
    divGhostChild.style.width = "100px";
    divGhostChild.style.height = "110px";
    
// Définition variables
dimX = document.getElementById("ghost_child").clientWidth;
dimY = document.getElementById("ghost_child").clientHeight;
posX = 8 * dimX;
posY = 4 * dimY;
divGhostParent.style.left = posX + "px";
divGhostParent.style.top = posY + "px";
divGhostParent.style.transform = "translate(-" + Math.round(dimX/2) + "px, -" + Math.round(dimY/2) + "px)";    

// Initialisation container
divContainer = document.getElementById("container");

    for (let indX = 0; indX<18; indX++)
    {
        for (let indY = 0; indY<8; indY++)
        {        
            // Creation new Div fruitParent
            newFruitDiv = document.createElement('div');
            newFruitDiv.id ="fruit_parent";
            newFruitDiv.style.position = "absolute";
            newFruitDiv.style.top = (indY+1) * dimY + "px";
            newFruitDiv.style.left = (indX+1) * dimX + "px";
            newFruitDiv.style.transform = "translate(-10px, -10px)";    

            divContainer.appendChild(newFruitDiv);

            // Création new fruitChild in Div
            newFruitImage = document.createElement('img');
            newFruitImage.src = "pacman/fruit.png";
            newFruitImage.style.width = "20px";
            newFruitImage.id ="fruit_child";
            newFruitDiv.appendChild(newFruitImage);        
        }
    }

// Détection appui touche
window.addEventListener("keydown", keyEvent);

// Action suite appui touche
function keyEvent(event)
{   
    keyPressed = event.keyCode;
    
    // Touche Z = UP détectée
    if (keyPressed==90)
    {
        posY += -dimY;
        divGhostParent.style.top = posY + "px";
        afficheImg("pacman/ghost_u.png");
    }

    // Touche X = DOWN détectée
    if (keyPressed==88)
    {
        posY += dimY;
        divGhostParent.style.top = posY + "px";
        afficheImg("pacman/ghost_d.png");
    }

    // Touche D = RIGHT détectée
    if (keyPressed==68)
    {
        posX += dimX;
        divGhostParent.style.left = posX + "px";
        afficheImg("pacman/ghost_r.png");
    }

    // Touche Q = LEFT détectée
    if (keyPressed==81)
    {
        posX += -dimX;
        divGhostParent.style.left = posX + "px";
        afficheImg("pacman/ghost_l.png");
    }
    
    // Déplacement ghost
    function afficheImg(image)
    {
        // Capture et effacement du child dans le DOM (du div Parent)
        imgGhostChild = document.getElementById("ghost_child");
        divGhostParent.removeChild(imgGhostChild);

        // Implanter la nouvelle image
        newGhostImage = document.createElement('img');
        newGhostImage.src = image;
        newGhostImage.style.width = "100px";
        newGhostImage.id ="ghost_child";
        divGhostParent.appendChild(newGhostImage);
    }
}
