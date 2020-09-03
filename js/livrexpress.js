/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcRemu() {

    // Déclaration et affectation des variables
    let distance = recupValeur("#num_km");
    let anciennete = recupValeur("#num_ancien");
    let nbAccident = recupValeur("#num_accident");
    let prime = primeDistance(distance) + primeAnciennete(anciennete);
    
    // Affichage du résultat
    afficheRemu(primeTotale(prime, nbAccident));
}

function primeTotale(prime, nbAccident){
    if (nbAccident === 1) {
        prime = prime/2;
    }
    else if (nbAccident === 2) {
        prime = prime/3;
    }
    
    else if (nbAccident === 3) {
        prime = prime/4;
    }
    
    else if (nbAccident >= 4) {
        prime = 0;
    }
    
    return prime;
}

function primeDistance(distance) {
    const prix = 0.01, plafond = 900;
    let prime = distance * prix;
    if (prime >= 900) {
        prime = 900;
    }
    return prime;
}

function primeAnciennete(ancien) {
    let prime = 0;
    let annee = 0;
    if (ancien >= 4) {
        prime = 300;
        annee = ancien-4;
        if (annee > 0) {
            prime = prime + (annee*30);
        }
    }
    return prime;
}

function afficheRemu(nombre) {
    window.document.querySelector("#prime").innerHTML = nombre;
    
    //BONUS: change de couleur au nombre à tous les paliers de 100€
    var remuneration = document.getElementById("prime");
    if ((nombre >= 100) && (nombre<200)){
        remuneration.style.color= "#ff00ff";
    }
    else if ((nombre >= 200) && (nombre<300)) {
        remuneration.style.color = "#00ffff";
    }
    else if ((nombre >=300) && (nombre <400)){
        remuneration.style.color = "#00ff00";
    }
    else if ((nombre >=400) && (nombre <500)){
        remuneration.style.color = "#ffff00";
    }
    else if ((nombre >=500) && (nombre <600)){
        remuneration.style.color = "#ff8000";
    }
    else if ((nombre >=600) && (nombre <700)){
        remuneration.style.color = "#ff0000";
    }
    else {remuneration.style.color = "black";
    }
}


function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}



window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");

    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {

        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("click", calcRemu);
        tabInputs[i].addEventListener("keyup", calcRemu);
        
    }
});

