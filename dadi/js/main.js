/* 
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?

Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/

var numeroGiocatore = Math.floor(Math.random() * 6 ) + 1;
console.log(numeroGiocatore);
var numeroCm = Math.floor(Math.random() * 6 ) + 1;
console.log(numeroCm);

if (numeroGiocatore > numeroCm) {
    alert("Hai vinto!");
} else if (numeroGiocatore == numeroCm) {
    alert("Pareggio!");
} else {
    alert("Hai perso!");
}