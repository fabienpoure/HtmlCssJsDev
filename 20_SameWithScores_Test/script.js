
// Exécuté au lancement de la page
function init()
{      
    // Lancement de la boucle de raffraîchissement
    nextFrame();
}

// Initialisations
captureDom();
initWindow();
intiScore();
initBall();
initRacket1();
initRacket2();
initTimer();

// A chaque itération
function nextFrame()
{
    setTimeout(() => 
    {
        
        // Détection appui touche
        window.addEventListener("keydown", keyEvent1);
        window.addEventListener("keydown", keyEvent2);

        // Calcul coordonnées balle et rackets
        calcCoordBall();
        calcCoordRack1();
        calcCoordRack2();

        // Test collision et changement direction en X et Y
        testCollisionBall();
        testCollisionRack1();
        testCollisionRack2();

        // Affichage balle xBall yBall et score
        displayBall();
        displayRack1();
        displayRack2();
        displayScore();
        
        // Raffraichissement de la page après "timer" secondes
        nextFrame();

    },timer)
}

// Capture des éléments du DOM
function captureDom()
{
    bal = document.getElementById("containerBalle");
    rk1 = document.getElementById("containerRacket1");
    rk2 = document.getElementById("containerRacket2");
    sco = document.getElementById("score");
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

// Init score
function intiScore()
{
    scoreL = 0;
    scoreR = 0;
}

// Initialisation des variables balle
function initBall()
{
    // Initialisation paramètres balle
    hBall = 25;                                             // Hauteur balle
    wBall = 25;                                             // Largeur balle
    xBall = 0;                                              // Coordonnée X balle
    yBall = 0;                                              // Coordonnée Y balle
    VitessBall = 2;                                         // Vitesse balle (en nombre de px)
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
    posRack1Y = Math.round(windowHeight/2 - hRack1/2);         // Pos Y racket 1
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

// Initialisation des variables racket 2
function initRacket2()
{
    // Initialisation paramètres racket 1
    hRack2 = 80;                                             // Hauteur racket 2
    wRack2 = 20;                                             // Largeur racket 2
    xRack2 = 0;                                              // Coordonnée X racket 2
    yRack2 = 0;                                              // Coordonnée Y racket 2
    vitessRack2 = 80;                                        // Vitesse racket 2 (en nombre de px)
    maxRack2Y = windowHeight - hRack2 - 10;                  // Y max pour la racket 2
    minRack2Y = 10;                                          // Y min pour la racket 2
    dirRack2Y = 0;                                           // Direction racket 2 en Y
    posRack2X = windowWidth - 300 - wRack2;                  // Pos X racket 2
    posRack2Y = Math.round(windowHeight/2 - hRack2/2);       // Pos Y racket 2
    x2A = 0;                                                 // Coordonnée X du bord 2A de racket 2
    y2A = 0;                                                 // Coordonnée Y du bord 2A de racket 2
    x2B = 0;                                                 // Coordonnée X du bord 2B de racket 2
    y2B = 0;                                                 // Coordonnée Y du bord 2B de racket 2
    collBallRack2 = false;                                   // Collision ball racket2

    // Initialisation taille de la racket 2
    imgrack2 = document.getElementById("racket2");
    imgrack2.style.width = wRack2 + "px";
    imgrack2.style.height = hRack2 + "px";
}

// Détection appui touche
function keyEvent1(event)
{   
    keyPressed1 = event.keyCode;
    
    // console.log(keyPressed1);
    // ----------------------------------------
    //      Up      racket 1    : Z=90
    //      Down    racket 1    : X=88 
    // ----------------------------------------

    // Touche Z = UP détectée
    if (keyPressed1==90)
    {
        dirRack1Y = -1;
        keyPressed1 = 0;
    }

    // Touche X = DOWN détectée
    if (keyPressed1==88)
    {
        dirRack1Y = 1;
        keyPressed1 = 0;
    }

}

// Détection appui touche
function keyEvent2(event)
{
    keyPressed2 = event.keyCode;

    // console.log(keyPressed2);
    // ----------------------------------------
    //      Up      racket 2    : P=80
    //      Down    racket 2    : !=223 
    // ----------------------------------------

    // Touche P = UP détectée
    if (keyPressed2==80)
    {
        dirRack2Y = -1;
        keyPressed2 = 0;
    }

    // Touche ! = DOWN détectée
    if (keyPressed2==223)
    {
        dirRack2Y = 1;
        keyPressed2 = 0;
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

// Calcul coordonnées racket 2
function calcCoordRack2()
{
    // Calcul de la position Y de racket 2
    posRack2Y += vitessRack2 *dirRack2Y;   

    // Préparation des coordonnées de l'élément racket 2 dans le DOM
    xRack2 =  posRack2X;
    yRack2 =  posRack2Y;
}

// Test collision balle
function testCollisionBall() 
{
    // Rebond à droite
    if (xBall >= maxBallX)
    {
        dirBallX = -1;
        scoreL +=1;
    }

    // Rebond à gauche
    if (xBall <= minBallX) 
    {
        dirBallX = 1;
        scoreR +=1;
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

    // Simplification des conditions collision ball/racket2
    x2A = xRack2;
    x2B = xRack2 + wRack2;
    y2A = yRack2;
    y2B = yRack2 + hRack2;

    // Si collision ball/racket2
    collBallRack2 = ( yBall >= y2A )&( yBall <= y2B )&( xBall >= x2A )&( xBall <= (x2A + wBall) );
    if (collBallRack2)
    {
        dirBallX = -1;
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

// Test collision racket 2
function testCollisionRack2()
{
    if (yRack2 <= minRack2Y)
    {
        posRack2Y = minRack2Y;
        yRack2 = minRack2Y;
    }

    if(yRack2 >= maxRack2Y)
    {
        posRack2Y = maxRack2Y;
        yRack2 = maxRack2Y;
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

// Affichage racket 2 sur sa position xRack1 et yRack1
function displayRack2()
{
    // Changement des coordonnées de l'élément racket 2 dans le DOM
    rk2.style.left = xRack2 + "px";
    rk2.style.top = yRack2 + "px";

    // Un seul mouvement de racket 1 par appui touche
    dirRack2Y = 0;
}

// Affichage du score
function displayScore()
{
    
    // Mise en forme du score gauche
    if (scoreL>10)
    {
        scoreL = 0;
        scoreR = 0;
    }
    if (scoreL<=9)
    {
        scoreL0 = "0";
    }
    else
    {
        scoreL0 = "";
    }
    
    // Mise en forme du score droit
    if (scoreR>10)
    {
        scoreL = 0;
        scoreR = 0;
    }
    if (scoreR<=9)
    {
        scoreR0 = "0";
    }
    else
    {
        scoreR0 = "";
    }
 
    // Mise à jour du score dans le DOM
    sco.innerHTML = scoreL0 + scoreL + ":" + scoreR0 + scoreR;
}