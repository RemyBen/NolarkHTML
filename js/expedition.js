function getFrais(poids){
    if (poids <= 100){
        return (poids * 4.5).toFixed(2) + ' €' ;
    } else if (poids <= 1000) {
        return (poids * 3).toFixed(2) + ' €';
    } else {
        return (poids * 2.5).toFixed(2) + ' €';
    }

}

