/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// Creo due variabili esemplifcicative

let a = 4
let b = 7

if(a>b){
  console.log("Il numero 'a' è il più grande")
} else if(a<b){
  console.log("Il numero 'b' è il più grande")
} else{
  console.log('I due numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let five
// asseggnazione di "five"
if (five !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let multipleOfFive = 125

if (multipleOfFive % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let int1 = 3
let int2 = 5

if (int1 === 8 || int2 === 8 || int1 + int2 === 8 || int1 - int2 === 8 || int2 - int1 === 8) {
  console.log('Mission accomplished')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 30

if (totalShoppingCart >= 50) {
  console.log("Tot.= ")
  console.log(totalShoppingCart)
  console.log("Hai diritto alla spedizione gratuita : )")
} else {
  console.log("Tot.= ")
  console.log(totalShoppingCart + 10)
  console.log("(Il totale include 10€ di spese di spedizione)")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = true
totalShoppingCart = 50

if (blackFriday) {
  totalShoppingCart *= 4/5
  if (totalShoppingCart >= 40) {
    console.log("Tot.= ")
    console.log(totalShoppingCart)
    console.log('Abbiamo scontato tutti i prodotti del 20%! Buon Black Friday!!')
    console.log("Hai diritto alla spedizione gratuita : )")
  } else {
    console.log("Tot.= ")
    console.log(totalShoppingCart + 10)
    console.log('Abbiamo scontato tutti i prodotti del 20%! Buon Black Friday!!')
    console.log("(Il totale include 10€ di spese di spedizione)")
  }  
}
else{
  if (totalShoppingCart >= 50) {
    console.log("Tot.= ")
    console.log(totalShoppingCart)
    console.log("Hai diritto alla spedizione gratuita : )")
  } else {
    console.log("Tot.= ")
    console.log(totalShoppingCart + 10)
    console.log("(Il totale include 10€ di spese di spedizione)")
  }
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x1 = 3
let x2 = 6
let x3 = 9

if (x1 >= x2 && x1 >=x3) {
  if (x2 >= x3) {
    console.log(x1,x2,x3)
  }
  else{
    console.log(x1,x3,x2)
  }
}
else if (x2 >= x1 && x2 >=x3) {
  if (x1 >= x3) {
    console.log(x2,x1,x3)
  }
  else{
    console.log(x2,x3,x1)
  }
}
else{
  if (x1 >= x2) {
    console.log(x3,x1,x2)
  }
  else{
    console.log(x3,x2,x1)
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = 6

if (typeof value === "number") {
  console.log('Il valore fornito è un numero')
} else {
  console.log('Il valore fornito non è un numero')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let evenOrOdd = 17

if (evenOrOdd % 2 === 0) {
  console.log('Il numero è pari')
}
else {
  console.log('Il numero è dispari')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Compreso tra 5 e 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto'

console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const myArray = []

myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)

console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9]=100

//oppure
// myArray.pop()
// myArray.push(100)

console.log(myArray)