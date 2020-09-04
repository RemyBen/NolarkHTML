function getFrais(poids){
    if (poids <= 100){
        return (poids * 4.5).toFixed(2) + ' €' ;
    } else if (poids <= 1000) {
        somme = 100 * 4.5;
        somme += (poids-100) * 3;
        return (somme).toFixed(2) + ' €';
        ;
    } else {
        somme = 100 * 4.5;
        somme += 900 * 3;
        somme += (poids - 1000) * 2.5;
        return (somme).toFixed(2) + ' €';
    }

}

