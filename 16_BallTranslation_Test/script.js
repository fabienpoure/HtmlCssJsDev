
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
var vitesseBall = 4;                                        // Vitess de la balle (en nombre de px)
var maxBallX = windowWidth - wBall;                         // X max pour la balle
var minBallX = wBall;                                       // X min pour la balle
var maxBallY = windowHeight - hBall;                        // Y max pour la balle
var minBallY = hBall;   
var directionX = 1;                                         // Y min pour la balle

var pas = 0;                                                // Index de raffraichissement de page
var timer = 1;                                              // Vitesse de raffraichissement de page

// Intitialisation des dimensions de la balle
imgbal = document.getElementById("balle");
imgbal.style.width = wBall + "px";
imgbal.style.height = hBall + "px";

// Check console
// console.log("Largeur de fenêtre : " + windowWidth);
// console.log("Min X balle : " + minBallX);
// console.log("Max X balle : " + maxBallX);
// console.log("---");
// console.log("Hauteur de fenêtre : " + windowHeight);
// console.log("Min Y balle : " + minBallY);
// console.log("Max Y balle : " + maxBallY);
// console.log("---");

// A chaque itération
function nextFrame()
{
    setTimeout(() => 
    {
        
        // Sélection de la balle dans le DOM
        bal = document.getElementById("containerBalle");

        // Calcul des nouvelles coordonnées X et Y de la balle
        xBall = minBallX + vitesseBall * pas;
        yBall = 450;

        // Rebound à droite
        if (xBall >= maxBallX)
        {
            directionX = -1;
        }

        // Rebond à gauche
        if (xBall <= minBallX)
        {
            directionX = 1;
        }

        // Affichage de la balle aux nouvelles coordonnées
        bal.style.left = xBall + "px";
        bal.style.top = yBall + "px";

        // Sélection du prochain raffraichissement
        pas += directionX;
        
        // Raffraichissement de la page après "timer" secondes
        nextFrame();

    },timer)
};