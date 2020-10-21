/****************************************************************
 * SECTION VENDITA BIGLIETTI TRENO
 ***************************************************************/ 


 
/****************************
 * REFERENZA ELEMENTI DEL DOM
*****************************/
var container = document.getElementById('tickets');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');

/***********
 * EVENTI
 **********/

// CALCOLO E GENERAZIONE TICKET
bottoneGenera.addEventListener('click', function() {
    // DATI UTENTE
    var nome = document.getElementById('nome').value;
    var kmDaPercorrere = document.getElementById('km').value;
    var fasciaEta = document.getElementById('fascia-eta').value;

    // PREZZI BIGLIETTI
    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * kmDaPercorrere;
    var offerta = 'Biglietto Standard';

    // SCONTO TICKET 
    if (fasciaEta == 'minorenne') {
        // SCONTO 20% 
        costoBiglietto -= costoBiglietto * 0.2;
        offerta = 'Sconto Minorenni'
    } 
    else if (fasciaEta == 'over65') {
        // SCONTO 40%
        costoBiglietto -= costoBiglietto * 0.4;
        offerta = 'Sconto Over 65';
    }

    // OUTPUT DECIMALI E VALUTA 
    costoBiglietto = costoBiglietto.toFixed(2) + '€';

    var numCarrozza = Math.floor( Math.random() * 10 ) + 1;
    var numCp = Math.floor( Math.random() *  (10000 - 9000) ) + 9000; 

    document.getElementById('nome-passeggiero').innerHTML = nome;
    document.getElementById('offerta-eta').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = numCarrozza;
    document.getElementById('codice-cp').innerHTML = numCp;
    document.getElementById('costo').innerHTML = costoBiglietto;

    // ANNULAMENTO HIDDEN TICKET
    container.className = 'show';
});

// RESET TICKET 
bottoneAnnulla.addEventListener('click', function() {
    container.className = 'hidden';

    // INPUT
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fascia-eta').value = '';

    // RESET VALORI BIGLIETTO
    document.getElementById('nome-passeggiero').innerHTML = '';
    document.getElementById('offerta-eta').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';
    document.getElementById('costo').innerHTML = '';
})


