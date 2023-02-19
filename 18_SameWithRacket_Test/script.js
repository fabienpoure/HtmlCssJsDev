
// Exécuté au lancement de la page
function init()
{      
    // Lancement de la boucle de raffraîchissement
    nextFrame();
}

// Initialisations
captureDom();
initWindow();
initBall();
initRacket1();
initTimer();

// A chaque itération
function nextFrame()
{
    setTimeout(() => 
    {
        
        // Détection appui touche
        window.addEventListener("keydown", keyEvent);

        // Calcul coordonnées balle et rackets
        calcCoordBall();
        calcCoordRack1()

        // Test collision et changement direction en X et Y
        testCollisionBall();
        testCollisionRack1();

        // Affichage balle sur sa position xBall et yBall
        displayBall();
        displayRack1();
        
        // Raffraichissement de la page après "timer" secondes
        nextFrame();

    },timer)
}

// Capture des éléments du DOM
function captureDom()
{
    bal = document.getElementById("containerBalle");
    rk1 = document.getElementById("containerRacket1");
}

// Initialisation valeur du timer
function initTimer()
{
    timer = 1;                              // Vitesse de raffraichissement de page
}

// Initialisation des variables fenêtre
function initWindow()
{
    windowWidth = window.innerWidth;                        // Calcul de la largeur de page : 1920 px
    windowHeight = window.innerHeight;                      // Calcul de la hauteur de page : 682 px
}

// Initialisation des variables balle
function initBall()
{
    // Initialisation paramètres balle
    hBall = 25;                                             // Hauteur balle
    wBall = 25;                                             // Largeur balle
    xBall = 0;                                              // Coordonnée X balle
    yBall = 0;                                              // Coordonnée Y balle
    VitessBall = 4;                                         // Vitesse balle (en nombre de px)
    maxBallX = windowWidth - wBall - 10;                    // X max pour la balle
    minBallX = wBall + 10;                                  // X min pour la balle
    maxBallY = windowHeight - hBall - 10;                   // Y max pour la balle
    minBallY = hBall + 10;                                  // Y min pour la balle
    dirBallX = 1;                                           // Direction balle en X
    dirBallY = 1;                                           // Direction balle en Y
    posBallX = 0;                                           // Pos X balle
    posBallY = 0;                                           // Pos Y balle

    // Initialisation taille de la balle
    imgbal = document.getElementById("balle");
    imgbal.style.width = wBall + "px";
    imgbal.style.height = hBall + "px";
}

// Initialisation des variables racket 1
function initRacket1()
{
    // Initialisation paramètres racket 1
    hRack1 = 80;                                             // Hauteur racket 1
    wRack1 = 20;                                             // Largeur racket 1
    xRack1 = 0;                                              // Coordonnée X racket 1
    yRack1 = 0;                                              // Coordonnée Y racket 1
    vitessRack1 = 80;                                        // Vitesse racket 1 (en nombre de px)
    maxRack1Y = windowHeight - hRack1 - 10;                  // Y max pour la racket 1
    minRack1Y = 10;                                          // Y min pour la racket 1
    dirRack1Y = 0;                                           // Direction racket 1 en Y
    posRack1X = 300;                                         // Pos X racket 1
    posRack1Y = Math.round(windowHeight/2) - hRack1;         // Pos Y racket 1
    x1A = 0;                                                 // Coordonnée X du bord 1A de racket 1
    y1A = 0;                                                 // Coordonnée Y du bord 1A de racket 1
    x1B = 0;                                                 // Coordonnée X du bord 1B de racket 1
    y1B = 0;                                                 // Coordonnée Y du bord 1B de racket 1
    collBallRack1 = false;                                   // Collision ball racket1

    // Initialisation taille de la racket 1
    imgrack1 = document.getElementById("racket1");
    imgrack1.style.width = wRack1 + "px";
    imgrack1.style.height = hRack1 + "px";
}

// Détection appui touche
function keyEvent(event)
{   
    keyPressed = event.keyCode;
    
    // console.log(keyPressed);
    // ----------------------------------------
    //      Up      racket 1    : Z=90
    //      Down    racket 1    : X=88 
    // ----------------------------------------

    // Touche Z = UP détectée
    if (keyPressed==90)
    {
        dirRack1Y = -1;
        keyPressed = 0;
    }

    // Touche X = DOWN détectée
    if (keyPressed==88)
    {
        dirRack1Y = 1;
        keyPressed = 0;
    }

}

// Calcul coordonnées ball
function calcCoordBall()
{
    // Calcul de la position X et Y de balle
    posBallX += VitessBall * dirBallX;
    posBallY += VitessBall * dirBallY;    
    
    // Préparation des coordonnées de l'élément balle dans le DOM
    xBall = minBallX + posBallX;
    yBall = minBallY + posBallY;
}

// Calcul coordonnées racket 1
function calcCoordRack1()
{
    // Calcul de la position Y de racket 1
    posRack1Y += vitessRack1 *dirRack1Y;   

    // Préparation des coordonnées de l'élément racket 1 dans le DOM
    xRack1 =  posRack1X;
    yRack1 =  posRack1Y;
}

// Test collision balle
function testCollisionBall() 
{
    // Rebond à droite
    if (xBall >= maxBallX)
    {
        dirBallX = -1;
    }

    // Rebond à gauche
    if (xBall <= minBallX) 
    {
        dirBallX = 1;
    }
    
    // Rebond en bas
    if (yBall >= maxBallY) 
    {
        dirBallY = -1;
    }

    // Rebond en haut
    if (yBall <= minBallY) 
    {
        dirBallY = 1;
    }

    // Simplification des conditions collision ball/racket1
    x1A = xRack1;
    x1B = xRack1 + wRack1;
    y1A = yRack1;
    y1B = yRack1 + hRack1;

    // Si collision ball/racket1
    collBallRack1 = ( yBall >= y1A )&( yBall <= y1B )&( xBall <= x1B )&( xBall >= (x1B - wBall) );
    if (collBallRack1)
    {
        dirBallX = 1;
    }

}

// Test collision racket 1
function testCollisionRack1()
{
    if (yRack1 <= minRack1Y)
    {
        posRack1Y = minRack1Y;
        yRack1 = minRack1Y;
    }

    if(yRack1 >= maxRack1Y)
    {
        posRack1Y = maxRack1Y;
        yRack1 = maxRack1Y;
    }
}

// Affichage balle sur sa position xBall et yBall
function displayBall()
{
    // Changement des coordonnées de l'élément balle dans le DOM
    bal.style.left = xBall + "px";
    bal.style.top = yBall + "px";
}

// Affichage racket 1 sur sa position xRack1 et yRack1
function displayRack1()
{
    // Changement des coordonnées de l'élément racket 1 dans le DOM
    rk1.style.left = xRack1 + "px";
    rk1.style.top = yRack1 + "px";
    
    // Un seul mouvement de racket 1 par appui touche
    dirRack1Y = 0;
}