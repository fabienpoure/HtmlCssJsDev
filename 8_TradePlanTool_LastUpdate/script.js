
function getAction()
{
    
    // Récupération des valeurs d'input de la page
    getInputValues();

    // Récupération de l'objet Div Main de la page
    getMainDivs();

    // Déclaration des variables du script
    initVariables();

    for (pas = 0; pas < njours; pas++) 
    {

        // Préparation du format de la date
        jour = joursemaine(date.getDay());
        jourmois = date.getDate();
        mois = moisannee(date.getMonth());
        annee = date.getFullYear();

        // Ajouter les fonds une seule fois à la date définie
            if ((date.toLocaleDateString()==datef.toLocaleDateString())&(fds!=0))
            {
                capital += fds;
            }
        
        // Ajouter les fonds tous les mois à partir de la date définie
            d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            dm = new Date(datem.getFullYear(), datem.getMonth(), datem.getDate());
            if ((d >= dm)&(jourmois == jourmoism)&(mns!=0))
            {
                capital += mns;
            }
        
        // Calculer puis afficher les chiffres pour chaque jour de trading
            if ((jour!="S")&(jour!="D")&(mois!="Juillet")&(mois!="Aout")&(mois!="Décembre"))
            {
                // Préparation du gain et du capital final
                gain = capital*cible/100;
                capital += gain;

                // Préparation de la ligne de texte
                prepfullline();
            }

        // Passer au jour suivant
            date.setDate(date.getDate() + 1);

    }

    function initVariables() 
    {
        date = new Date(startdate);
        datef = new Date(datefds);
        datem = new Date(datemns);
        jourmoism = datem.getDate();
        jour = "";
        jourmois = -1;
        mois = "";
        annee = "";
        gain = 0;
        textdivdate = "";
        textdivgain = "";
        textdivfinal = "";
        moisref = "";
        cinqcentfranchi = false;
        millefranchi = false;
        spotpaye = false;
        menspaye = false;
        redin = "";
        redout = "";
    }

    function getMainDivs() 
    {
        divdate = document.getElementById("date");
        divgain = document.getElementById("gain");
        divfinal = document.getElementById("final");
    }

    function getInputValues() 
    {
        capital = Number(document.getElementById("capital").value);
        cible = Number(document.getElementById("cible").value);
        njours = Number(document.getElementById("nbjours").value);
        startdate = document.getElementById("sdate").value;
        fds = Number(document.getElementById("fonds").value);
        datefds = document.getElementById("datefonds").value;
        mns = Number(document.getElementById("mensuel").value);
        datemns = document.getElementById("datemensuel").value;
    }

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
        
        // Affichage du mois et de l'année en tête de la liste
            if (mois!=moisref)
            {
                textdivdate += "<br/><b>" + mois + " " + annee + "</b><br/><br/>";
                textdivgain += "<br/><br/><br/>";
                textdivfinal += "<br/><br/><br/>";
                moisref = mois;
            }
        
        // Affichage en surligné jaune le jour ou le gain est pour la première fois supérieur à 500 euros
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
        
        // Affichage en surligné jaune le jour ou le gain est pour la première fois supérieur à 1000 euros
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

        // Affichage en surligné vert le jour du versement mensuel (lorsqu'il est affiché)
            if (menspaye)
            {
                menspaye = false;
                redin = '<font color=\"#000000\">';
                redout = '</font>';
            }

            if ((!menspaye)&&(d >= dm)&(jourmois == jourmoism)&(mns!=0))
            {
                menspaye =true;
                redin = "<b><span style=\"color:#FF0000; background-color:#FFFF00;\">";
                redout ="</span></b>";
            }

        // Affichage en surligné bleu le jour du versement spot (lorsqu'il est affiché)
            if (spotpaye)
            {
                spotpaye = false;
                redin = '<font color=\"#000000\">';
                redout = '</font>';
            }

            if ((!spotpaye)&&(date.toLocaleDateString()==datef.toLocaleDateString())&(fds!=0))
            {
                spotpaye =true;
                redin = "<b><span style=\"color:#FF0000; background-color:#FFFF00;\">";
                redout ="</span></b>";
            }
        
        // Préparation de la ligne à afficher
            textdivdate += redin + jour + " " + jourmois + redout + "<br/>";
            if (gain>0)
            {
                textdivgain += redin + "+ " + Math.round(gain).toLocaleString() + redout + "<br/>";
            }
            else
            {
                textdivgain += redin + Math.round(gain).toLocaleString() + redout + "<br/>";
            }        
            textdivfinal += redin + Math.round(capital).toLocaleString() + redout + "<br/>";
    
        // Modification des textes, affichage dans le Div Main
            divdate.innerHTML = textdivdate;
            divgain.innerHTML = textdivgain;
            divfinal.innerHTML = textdivfinal;

    }

}