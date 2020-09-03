/**
 * Fonction qui retourne l'alcool pur ingéré en fonction du nombre
 * de verre
 * 
 * @param {type} nbVerres
 * @returns {Number}
 */

function getAlcoolPur(nbVerres){
    const uniteAlcool = 10;
    return nbVerres * 10;
}

function getCoefDiffusion(sexe) {
    if (sexe === 'homme'){
        return 0.7;
    } else {
        return 0.6;
    }
}