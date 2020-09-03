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