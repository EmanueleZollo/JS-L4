/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let result = 0;

const area = function(l1, l2) {
    result = l1 * l2 
    return result
}

console.log("L'area del rettangolo è " + area(10, 13) + "cm^2"); //come scrivere un apice?? !!!

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/


 
/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(n1, n2) {
    if (n1 !== n2) {
        result = n1 + n2;
    } else {
        result = (n1+n2)*3
    }
    return result;
}

console.log(crazySum(Math.floor(Math.random()*10 ), Math.floor(Math.random()*15))); 
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n3) {// DOMANDA DA FARE: nominare gli input nello stesso modo in due funzioni diverse è un problema?
    if (n3 <= 19) {
        result = 19 - n3;
    } else{
        result = (n3 - 19)*3;
    }
return result;  // se volessi far ritornare più di una variable?
}

console.log(crazyDiff(23));
console.log(Math.floor(Math.random()*30))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let verifyFunction = null;
 const boundary = function (n) {
    if (n > 20 && n <=100 || n === 400) {
        verifyFunction= true
    } else {
        verifyFunction = false
    }
    return verifyFunction;
 }

 console.log(boundary(Math.floor(Math.random()*500)));
 console.log(boundary(50));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let randString = "Semaforo"

const epify = function (str) {
 if (str === "EPICODE") {
    randString = str
 } else {
    randString = "EPICODE" + str 
 }
 return randString;
}

console.log(epify("Ciao"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function(n4) {
    if (n4 % 7 === 0) {
        randString = n4 + " è un multiplo di 7"
    } else if (n4 % 4 === 0){
        randString = n4 + " è un multiplo di 4"
    } else {
        randString = n4 + " non è un multiplo di 4 nè di 7"
    }
    return randString;
}

console.log(check3and7(Math.floor(Math.random()*30)));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 const reverseString = function (str) {
    let split = str.split("")
    let reverse = split.reverse()
    let join = reverse.join("")

    return join
 }

 console.log(reverseString("Hello"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//  const upperFirst = function (str) {
//     let split = str.split("")
//     for (let i = 0; i < split.length; i++) {
//         switch (split) {
//             case (split[i]=== 0):
//                 split[i].toUpperCase();
//             break;
//             case (split.indexOf(" ") + 1 ) :
//                 split[i].toUpperCase();
//             break;
//         } 
        
//     }
//     let join = split.join("")
//     return join;
//  }

//  console.log(upperFirst("i topi non avevano nipoti"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function(str){
    let split = str.split("")
    split.pop()
    split.shift()
    let join = split.join("")
    return join;
}

console.log(cutString("Ciao amici"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let randArray = []
 let giveMeRandom = function (n5) {
    for (let i=0; i < n5; i++) {
        randArray.push(Math.floor(Math.random()*10))
    }

    return randArray;
 }

 console.log(giveMeRandom(7));