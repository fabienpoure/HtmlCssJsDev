       
function getAction()
{
    var action = document.getElementById("theAction").value;
    
    // Préparation des données
    var capital = Number(action);
    var unpc = capital*1/100;
    var deuxpc = capital*2/100;
    var troispc = capital*3/100;
    var mcinqpc = -capital*5/100;
    var mdixpc = -capital*10/100;
    var lotsmax = capital/50/2/2/2/2;

    // Affichage du capital
    capital = capital.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' $';
    document.getElementById("textbottom1").innerHTML=capital;
    
    // Affichage du 1%
    unpc = unpc.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' $';
    document.getElementById("textbottom2").innerHTML=unpc;

    // Affichage du 2%
    deuxpc = deuxpc.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' $';
    document.getElementById("textbottom3").innerHTML=deuxpc;

    // Affichage du 3%
    troispc = troispc.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' $';
    document.getElementById("textbottom4").innerHTML=troispc;

    // Affichage du -5%
    mcinqpc = mcinqpc.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' $';
    document.getElementById("textbottom5").innerHTML=mcinqpc;

    // Affichage du -10%
    mdixpc = mdixpc.toFixed(0).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' $';
    document.getElementById("textbottom6").innerHTML=mdixpc;

    // Affichage du max de lots
    lotsmax = lotsmax.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    document.getElementById("textbottom7").innerHTML=lotsmax;
}

function getAction2()
{
    // Variables
    var cppname = "<span id=\"colorppname\">";
    var cppvalue = "<span id=\"colorppvalue\">";
    var endcolor = "</span>";
    
    // Récupération des données
    var coursfutur = document.getElementById("theAction2").value;
    var courscfd = document.getElementById("theAction3").value;
    var pointpivotcfd = document.getElementById("theAction4").value;
    var nompivotfutur = document.getElementById("theAction5").value;

    // Préparation des données
    var cfutur = Number(coursfutur);
    var ccfd = Number(courscfd);
    var ppcfd = Number(pointpivotcfd);
    var ecart = cfutur - ccfd;
    var ppfutur = ppcfd + ecart;
                
    // Affichage de l'écart
    ecart = ecart.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    document.getElementById("textbottom8").innerHTML=ecart;

    // Affichage du PP futur
    ppfutur = ppfutur.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + "<br>";
    var liste = document.getElementById("textbottom9").innerHTML;
    document.getElementById("textbottom9").innerHTML = liste + cppname + nompivotfutur + " - " + endcolor + " " + cppvalue + ppfutur + endcolor;

}

function getAction3()
{
    document.getElementById("textbottom9").innerHTML = "";
}

function inittime()
{
    // Lancement du chronomètre
    ch = 0;
    cm = 0;
    cs = 0;

    // Lancement de l'horloge
    heureCheck();
}

function heureCheck()
{
    // Préparation des variables dates et heures
    d = new Date;
    heure = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    jour = d.getDate();
    joursem = d.getDay();
    mois = d.getMonth()+1;
    annee = d.getFullYear();

    formatjoursemaine();
    formatmoisannee();

    formatdate();
    formattime();

    incrementchrono();
    formatchrono();

    affichedate();
    affichechrono();

    couleurdate();
    couleurchrono();

    // Répéter toutes les secondes
    setTimeout("heureCheck()", 1000)

    function formatmoisannee() {
        if (mois == 1) {
            ma = "Janvier";
        }
        if (mois == 2) {
            ma = "Février";
        }
        if (mois == 3) {
            ma = "Mars";
        }
        if (mois == 4) {
            ma = "Avril";
        }
        if (mois == 5) {
            ma = "Mai";
        }
        if (mois == 6) {
            ma = "Juin";
        }
        if (mois == 7) {
            ma = "Juillet";
        }
        if (mois == 8) {
            ma = "Aout";
        }
        if (mois == 9) {
            ma = "Septembre";
        }
        if (mois == 10) {
            ma = "Octobre";
        }
        if (mois == 11) {
            ma = "Novembre";
        }
        if (mois == 12) {
            ma = "Décembre";
        }
    }

    function formatjoursemaine() {
        if (joursem = 1) {
            js = "Lundi";
        }
        if (joursem = 2) {
            js = "Mardi";
        }
        if (joursem = 3) {
            js = "Mercredi";
        }
        if (joursem = 4) {
            js = "Jeudi";
        }
        if (joursem = 5) {
            js = "Vendredi";
        }
        if (joursem = 6) {
            js = "Samedi";
        }
        if (joursem = 0) {
            js = "Dimanche";
        }
    }

    function couleurchrono() {
        if (ch >= 0 && ch < 1)
            document.getElementById("chrono").style.backgroundColor = "green";
        if (ch >= 1 && ch < 2)
            document.getElementById("chrono").style.backgroundColor = "orange";
        if (ch >= 2)
            document.getElementById("chrono").style.backgroundColor = "red";
    }

    function couleurdate() {
        if (min >= 50 || js=="Lundi" || js=="Vendredi")
            document.getElementById("dateheure").style.backgroundColor = "red";

        else
            document.getElementById("dateheure").style.backgroundColor = "green";
    }

    function incrementchrono() {
        cs = cs + 1;
        if (cs == 60) {
            cm = cm + 1;
            cs = 0;
        }
        if (cm == 60) {
            ch = ch + 1;
            cm = 0;
            cs = 0;
        }
    }

    function affichechrono() {
        which = cheu;
        if (document.getElementById) {
            document.getElementById("chrono").innerHTML = which;
        }
    }

    function formatchrono() {
        if (cs < 10)
            cs0 = "0";
        else
            cs0 = "";
        if (cm < 10)
            cm0 = "0";
        else
            cm0 = "";
        if (ch < 10)
            ch0 = "0";
        else
            ch0 = "";
        cheu = `${ch0}${ch}:${cm0}${cm}:${cs0}${cs}`;
    }

    function affichedate() {
        which = heu;
        if (document.getElementById) {
            document.getElementById("dateheure").innerHTML = which;
        }
    }

    function formattime() {
        if (sec < 10)
            sec0 = "0";
        else
            sec0 = "";
        if (min < 10)
            min0 = "0";
        else
            min0 = "";
        if (heure < 10)
            heure0 = "0";
        else
            heure0 = "";
        heu = `${dat} - ${heure0}${heure}:${min0}${min}:${sec0}${sec}`;
    }

    function formatdate() {
        if (jour < 10)
            jour0 = "0";
        else
            jour0 = "";
        if (mois < 10)
            mois0 = "0";
        else
            mois0 = "";
        dat = `${js} ${jour} ${ma} ${annee}`;
        // dat = `${jour0}${jour}/${mois0}${mois}/${annee}`;
    }
}

window.onload = inittime();
