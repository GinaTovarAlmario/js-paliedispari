// controllo che veda il mio script.js
console.log('Js ok');
// ho fatto un file a parte per le mie funzioni faccio il controllo
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });
/** ESRCIZIO 1 : Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
1- Mi servirà una variabile in cui inserire la parola data dall'utente
2- mi servirà prendere il mio elmento dal DOM per stampare in pagina il risultato (se voglio farlo alla fine dell'esercizio)
3-chiedo all'utente di inserire una parola
4- prendo la parola data dall'utente la salvo in una variabile
5-devo controllora se la parola data è palindorma quindi :
prendo la mia parola la inverto e vedo se invertita è uguale alla parola data dall'utente.*/

// FASE DI PREPARAZIONE
const resultElement = document.getElementById('result');
// FASE DI RACCOLTA DATI
const givenWord = prompt('Inserisci una parola per sapere se è palindorma:','ingegni').trim();
// FASE DI ELABORAZIONE DATI
let finalWord = reverseWord(givenWord);
// FASE DI OUTPUT
console.log(finalWord);
resultElement.innerHTML = `Parola inserita ${givenWord} e parola invertita ${finalWord}`;


/*ESERCIZIO 2 : Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
BONUS
usare il più possibile il DOM, sia per raccogliere i dati che per stampare il risultato */