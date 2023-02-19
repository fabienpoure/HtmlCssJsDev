
function getAction()
{
    
    // Récupération des valeurs d'input
    capital = Number(document.getElementById("capital").value);
    cible = Number(document.getElementById("cible").value);
    njours = Number(document.getElementById("nbjours").value);

    // Récupération de l'objet main
    divdate = document.getElementById("date");
    divgain = document.getElementById("gain");
    divfinal = document.getElementById("final");

    // Déclaration des variables
    date = new Date();
    jour = "";
    jourmois = -1;
    mois = "";
    annee = "";
    gain = 0;
    textdivdate = "";
    textdivgain = "";
    textdivfinal = "";    
    moisref = "";
    sautligne = "";
    cinqcentfranchi = false;
    millefranchi = false;
    redin = "";
    redout = "";

    for (pas = 0; pas < njours; pas++) 
    {

        // Préparation du format de la date
        jour = joursemaine(date.getDay());
        jourmois = date.getDate();
        mois = moisannee(date.getMonth());
        annee = date.getFullYear();

        if ((jour!="S")&(jour!="D"))
        {
            // Préparation du gain et du capital final
            gain = capital*cible/100;
            capital += gain;

            // Préparation de la ligne de texte
            prepfullline();
        }
        else
        {
            // Préparation de la ligne de texte
            prepshortline();
        }

        // Affichage dans le main
        divdate.innerHTML = textdivdate;
        divgain.innerHTML = textdivgain;
        divfinal.innerHTML = textdivfinal;

        // Préparation à la prochaine itération
        date.setDate(date.getDate() + 1);

    }

    // Fonctions

    function joursemaine(js) {
        if (js == 1) {
            return "L";
        }
        if (js == 2) {
            return "Ma";
        }
        if (js == 3) {
            return "Me";
        }
        if (js == 4) {
            return "J";
        }
        if (js == 5) {
            return "V";
        }
        if (js == 6) {
            return "S";
        }
        if (js == 0) {
            return "D";
        }
    }

    function moisannee(ma)
    {
        if (ma == 0) {
            return "Janvier";
        }
        if (ma == 1) {
            return "Février";
        }
        if (ma == 2) {
            return "Mars";
        }
        if (ma == 3) {
            return "Avril";
        }
        if (ma == 4) {
            return "Mai";
        }
        if (ma == 5) {
            return "Juin";
        }
        if (ma == 6) {
            return "Juillet";
        }
        if (ma == 7) {
            return "Aout";
        }
        if (ma == 8) {
            return "Septembre";
        }
        if (ma == 9) {
            return "Octobre";
        }
        if (ma == 10) {
            return "Novembre";
        }
        if (ma == 11) {
            return "Décembre";
        }
    }

    function prepfullline()
    {        
        if (mois!=moisref)
        {
            textdivdate += "<br/><b>" + mois + " " + annee + "</b><br/><br/>";
            textdivgain += "<br/><br/><br/>";
            textdivfinal += "<br/><br/><br/>";
            moisref = mois;
        }
                
        if (jour=="V")
        {
            sautligne = "";
        }
        else
        {
            sautligne = "<br/>";
        }

        if ((cinqcentfranchi))
        {
            cinqcentfranchi = true;
            redin = '<font color=\"#000000\">';
            redout = '</font>';
        }

        if ((!cinqcentfranchi)&&(gain>500))
        {
            cinqcentfranchi = true;
            redin = "<b><span style=\"color:#FF0000; background-color:#FFFF00;\">";
            redout ="</span></b>";
        }

        if ((millefranchi))
        {
            millefranchi = true;
            redin = '<font color=\"#000000\">';
            redout = '</font>';
        }

        if ((!millefranchi)&&(gain>1000))
        {
            millefranchi = true;
            redin = "<b><span style=\"color:#FF0000; background-color:#FFFF00;\">";
            redout ="</span></b>";
        }
        
        textdivdate += redin + jour + " " + jourmois + redout + sautligne;
        if (gain>0)
        {
            textdivgain += redin + "+ " + Math.round(gain).toLocaleString() + redout + sautligne;
        }
        else
        {
            textdivgain += redin + Math.round(gain).toLocaleString() + redout + sautligne;
        }        
        textdivfinal += redin + Math.round(capital).toLocaleString() + redout + sautligne;
    }

    function prepshortline()
    {
        if (jour=="D")
        {
            textdivdate += "<br/>";
            textdivgain += "<br/>";
            textdivfinal += "<br/>";
        }
    }

}