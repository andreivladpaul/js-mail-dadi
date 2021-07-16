/* 
Chiedi all’utente la sua email,

controlla che sia nella lista di chi può accedere,

stampa un messaggio appropriato sull’esito del controllo. */


var mailUtente = prompt("Qual è la tua mail?");

var mailList = ["paolodossetto@gmail.com", "dariobosco@gmail.com", "vladandrei@gmail.com", "hamzajamil@gmailcom", "vitomarseglia@gmail.com"];

/* if (mailList.includes(mailUtente)) {
    alert("Bentornato nel tuo spazio riservato!");
} else {
    alert("Accesso negato. Riprova.");
} */

for (var count = 0; count < mailList.length; count++) {
    if (mailList[count] == mailUtente) {
        alert("Bentornato nel tuo spazio riservato!");
        break;
    } else {
        alert("Accesso negato. Riprova.");
        break;
    }
}