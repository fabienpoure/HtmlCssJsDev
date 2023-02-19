
// Exécuté au lancement de la page
function init()
{      
    // Lancement de la boucle de raffraîchissement
    nextFrame();
}

// Initialisation des variables

var windowWidth = window.innerWidth;                        // Calcul de la largeur de page : 1920 px
var windowHeight = window.innerHeight;                      // Calcul de la hauteur de page : 682 px

var hBall = 25;                                             // Hauteur de la balle
var wBall = 25;                                             // Largeur de la balle
var xBall = 0;                                              // Coordonnée X de la balle
var yBall = 0;                                              // Coordonnée Y de la balle
var Ball = 4;                                               // Vitess de la balle (en nombre de px)
var maxBallX = windowWidth - wBall - 10;                    // X max pour la balle
var minBallX = wBall + 10;                                  // X min pour la balle
var maxBallY = windowHeight - hBall - 10;                   // Y max pour la balle
var minBallY = hBall + 10;                                  // Y min pour la balle
var directionX = 1;                                         // Direction balle en X
var directionY = 1;                                         // Direction balle en Y

var pasX = 0;                                               // Index avancement X
var pasY = 0;                                               // Index avancement Y
var timer = 1;                                              // Vitesse de raffraichissement de page

// Intitialisation des dimensions de la balle
imgbal = document.getElementById("balle");
imgbal.style.width = wBall + "px";
imgbal.style.height = hBall + "px";


// A chaque itération
function nextFrame()
{
    setTimeout(() => 
    {
        
        // Capture balle dans le DOM
        bal = document.getElementById("containerBalle");

        // Calcul prochaine position de balle en X et Y
        calcNextPosition();

        // Test collision et changement direction en X et Y
        testCollision();

        // Affichage balle sur sa position xBall et yBall
        displayBall();

        // Sélection du prochain raffraichissement
        pasX += directionX;
        pasY += directionY;
        
        // Raffraichissement de la page après "timer" secondes
        nextFrame();

    },timer)
};

// Calcul prochaine position de balle en X et Y
function calcNextPosition() 
{
    xBall = minBallX + Ball * pasX;
    yBall = minBallY + Ball * pasY;
}

// Test collision et changement direction en X et Y
function testCollision() 
{
    // Rebond à droite
    if (xBall >= maxBallX)
    {
        directionX = -1;
    }

    // Rebond à gauche
    if (xBall <= minBallX) 
    {
        directionX = 1;
    }
    
    // Rebond en bas
    if (yBall >= maxBallY) 
    {
        directionY = -1;
    }

    // Rebond en haut
    if (yBall <= minBallY) 
    {
        directionY = 1;
    }
}

// Affichage balle sur sa position xBall et yBall
function displayBall()
{
    bal.style.left = xBall + "px";
    bal.style.top = yBall + "px";
}