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

window.addEventListener('load', function () {
    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input');

    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], affichePrixExpedition);
        }
    }
});

function affichePrixExpedition(){
    let poids = parseInt(window.document.querySelector('#poids').value);
    window.document.querySelector('#prix').innerHTML = getFrais(poids);
}