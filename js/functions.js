// PRIMO ESERCIZIO
// funzione per verificare se è palindorma o meno
/*
1-come la chiamo?
2-ho bisogno di un parametro? si, la parola data da utente
3-ho bisogno di restituire un valore? si la parola al contrario
4-se si , di che tipo? sarà una stringa
*/
/**
 * given a word I start reading from the last letter until I reach the first word
 * then a save this new word and return the result
 * @param {string} word 
 * @returns {string}
 */
function reverseWord(word){
    let revWord = '';
    for( let i = word.length - 1; i>= 0; i--){
        revWord += word.charAt(i);
    }
    return revWord;
}
// SECONDO ESERCIZIO
// funzione per generare numeri random con un minimo e un massimo
/*
1-come la chiamo?
2-ho bisogno di un parametro? si, la parola data da utente
3-ho bisogno di restituire un valore? si la parola al contrario
4-se si , di che tipo? sarà una stringa
*/
function getRandomNumber (min, max){
    return Math.floor( Math.random()* (max - min +1) + 1);
}
// funzione pari
/*
1-come la chiamo?
2-ho bisogno di un parametro? si, la parola data da utente
3-ho bisogno di restituire un valore? si la parola al contrario
4-se si , di che tipo? sarà una stringa
*/


// fumzione dispari
/*
1-come la chiamo?
2-ho bisogno di un parametro? si, la parola data da utente
3-ho bisogno di restituire un valore? si la parola al contrario
4-se si , di che tipo? sarà una stringa
*/