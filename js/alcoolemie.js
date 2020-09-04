/**
 * Fonction qui retourne l'alcool pur ingéré en fonction du nombre
 * de verre
 * 
 * @param {type} nbVerres
 * @returns {Number}
 */

function getAlcoolPur(nbVerres){
    const uniteAlcool = 10;
    return nbVerres * uniteAlcool;
}

/**
 * Fonction qui retourne le coefficient de diffusion en fonction du sexe
 * 
 * @param {type} sexe
 * @returns {float}
 */
function getCoefDiffusion(sexe) {
    const coefDiffuH = 0.7, coefDiffuF = 0.6;
    if (sexe === 'homme'){
        return coefDiffuH;
    } else {
        return coefDiffuF;
    }
}
/**
 * Fonction qui retourne l'alcoolémie en fonction du sexe, du poids et du
 * nombre de verres ingérés
 * 
 * @param {type} sexe
 * @param {type} poids
 * @param {type} nbVerres
 * @returns {float}
 */
function getAlcoolemie(sexe, poids, nbVerres){
    // /!\ division par 0, on ne veut pas provoquer la destruction de l'univers ;0)
    if (poids > 0){
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    } else {
        return 0;
    }
}

window.addEventListener('load', function () {
    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input');

    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], afficheAlcoolemie);
        }
    }
});

function afficheAlcoolemie(){
    let sexe = getString('#sexe_title input[type="radio"]:checked');
    let poids = getInt('#num_poids');
    let nbVerres = getInt('#num_verre');
    afficheRecup(getAlcoolemie(sexe, poids, nbVerres));
}

function afficheRecup(param){
    window.document.querySelector("#alcoolemie").innerHTML = param;
}

/**
 * Fonction qui retourne l'amende encourue en fonction de l'alcoolémie * 
 * 
 * @param {type} alcoolemie
 * @returns {String}
 */
function getAmende(alcoolemie) {
    if (alcoolemie < 0.8) {
        return 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €';
    } else {
        return '4500 €';
    }
}

/**
 * Fonction qui retourne la sanction encourue en fonction de l'alcoolémie
 * 
 * @param {type} alcoolemie
 * @returns {String}
 */
function getSanction(alcoolemie){
    if (alcoolemie < 0.8) {
        return '6 points + suspension 3 ans';
    } else {
        return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
    }
}

/**
 * Fonction qui retourne une valeure entière récupérée via
 * window.document.querySelector(id)
 * 
 * @param {type} id
 * @returns {Number}
 */
function getInt(id){
    let valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)){
        return 0;
    } else {
        return valeur;
    }
}

/**
 * Fonction qui retourne un string récupéré dans un champ via son id
 * 
 * @param {type} id
 * @returns {Element.value}
 */
function getString(id){
    return window.document.querySelector(id).value;
}