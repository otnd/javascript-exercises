# Develhope - Esercizi JavaScript

## Variables Declarations - Exercise 1

In questo esercizio si sta cercando di far stampare la frase "Paul plays football", ma se si esegue il codice si noterà l'errore "**personName is not defined**".

Cosa occorre fare per fixare l'errore?

## Variables Declarations - Exercise 2

L'obiettivo di questo esercizio è quello di rendere `personName` una variabile di sola lettura. Qual è la keyword da utilizzare per dichiarare una variabile `readonly`?

## Variables Declarations - Exercise 3

In questo esercizio occorre implementare la funzione `addStudent`, la quale si occupa di aggiungere un elemento all'array `students` dichiarato tramite `const`.

Qual è il metodo che possiamo utilizzare per aggiungere un elemento all'array?

Sai individuare il motivo per cui abbiamo la possibilità di aggiungere un elemento all'array nonostante abbiamo dichiarato la variabile come `readonly`?

## Conditionals & Loops - Exercise 1

Implementare, tramite i blocchi condizionali `if / else-if / else`, la funzione `calculateSalary`, la quale, dato in input un ruolo, calcola il salario corrispondente.
Per ogni ruolo il salario percepito è il seguente:

* ceo => 2200€
* manager => 1800€
* cto => 1800€
* developer => 1500€
* default => 1000€

## Conditionals & Loops - Exercise 2

Implementare, tramite il blocco `switch-case`, la funzione `calculateSalary`, la quale, dato in input un ruolo, calcola il salario corrispondente.
Per ogni ruolo il salario percepito è il seguente:

* ceo => 2200€
* manager => 1800€
* cto => 1800€
* developer => 1500€
* default => 1000€

## Conditionals & Loops - Exercise 3

Implementare, tramite blocchi condizionali e cicli, la funzione `adultFilter`, la quale, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni

## Conditionals & Loops - Exercise 4

Implementare, tramite blocchi condizionali e cicli, la funzione `nicknameMap`, la quale, dato un array di persone, crea un array di nickname. Il nickname deve essere formato nel seguente modo: `<name>-<age>`

## Conditionals & Loops - Exercise 5

Implementare, tramite blocchi condizionali e cicli, la funzione `calculateAverageAge`, la quale, dato un array di persone, calcola l'età media

## Conditionals & Loops - Exercise 6

Implementare, tramite blocchi condizionali e cicli, la funzione `getKeys`, la quale, dato in input un qualsiasi oggetto, restituisce la lista delle chiavi presenti al suo interno

Esempio:
```
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys); // ['firstName', 'lastName', 'age', 'city', 'job']
```

## Conditionals & Loops - Exercise 7

Implementare, tramite blocchi condizionali e cicli, la funzione `sumUntil`, la quale, dato in input un valore, effettua la somma di tutti i numeri che vanno da `1` fino al valore passato come parametro

Esempio:
```
function sumUntil(maxValue) {
  // ...
}

console.log(sumUntil(5)); // OUTPUT: 1 + 2 + 3 + 4 + 5 = 15
```

## Arrow functions - Exercise 1

Trasformare le due variabili funzione (`sum` e `log`) in due arrow functions

## Arrow functions - Exercise 2

Trasformare la variabile funzione `concat` in una arrow function

## Arrow functions - Exercise 3

Trasforma le variabili funzione in arrow functions e concatenale in modo tale che venga stampato sulla console la seguente operazione matematica: `((2 + 4) * (5 + 2) - 2) / 5`

## Closure - Exercise 1

Implementare la funzione `greet` che accetta come argomento un saluto (`greeting`) e restituisce una closure che si occupa di concatenare il saluto passato come parametro con il nome della persona da salutare

Esempio:
```
const greetWithHello = greet('Hello'); // Hello
const greetWithBye = greet('Bye'); // Bye
const greetWithHi = greet('Hi'); // Hi

const greetPaulWithHello = greetWithHello('Paul'); // Hello, Paul
const greetPaulWithHi = greetWithHi('Paul'); // Hi, Paul
const greetJohnWithBye = greetWithBye('John'); // Bye, John
const greetSimonWithHello = greetWithHello('Simon'); // Hello, Simon
```

## Closure - Exercise 2

Implementare la funzione `pow` che accetta come argomento la base (`base`) e restituisce una closure che si occupa di elevare a potenza la base per l'esponente passato come parametro

## Closure - Exercise 3

Implementare la funzione `createStore` che crea un array vuoto di prodotti e restituisce una closure che si occupa di aggiungere prodotti allo store. Per ogni prodotto aggiunto allo store eseguire il `console.log` dell'intero store

## Closure - Exercise 4

Implementare la funzione `calculate` che restituisce un oggetto che dia la possibilità di eseguire le quattro operazioni matematiche (somma, sottrazione, moltiplicazione e divisione) su uno stesso numero e infine consente di stamparne il risultato.

**TIP**: Per concatenare i metodi basta restituire il riferimento all'oggetto stesso (`$this`)

Esempio:
```
calculator
  .add(2) // 2
  .add(4) // 6
  .multiply(3) // 18
  .sub(1) // 17
  .sub(3) // 14
  .divide(2) // 7
  .printResult();
```

## Closure - Exercise 5

Implementare la funzione `memoize` che, data in input la funzione per il calcolo del fattoriale, restituisce una closure che accetta come argomento un numero su cui eseguire la funzione per il calcolo del fattoriale, verifica se il risultato è già presente all'interno della variabile `cache`, se è presente restituisce immediatamente il risultato memorizzato precedentemente, altrimenti esegue la funzione passata come argomento e memorizza il risultato all'interno della variabile `cache`, così da servire il risultato cachato precedentemente qualora venga richiesto il fattoriale per lo stesso numero.

Esempio:
```
factorial = memoize(factorial);
console.log(factorial(10)); // Calculating result for 3628800
console.log(factorial(6)); // Fetching from cache for 720
console.log(factorial(5)); // Fetching from cache for 120
```

## Object Copying - Exercise 1

In questo esercizio sono stati creati due oggeti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?

## Object Copying - Exercise 2

In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla alla variabile `person2`, permettendo così di modificare il `firstName` di `person2`, senza che venga modificato anche il valore `firstName` di `person1`

## Object Copying - Exercise 3

In questo esercizio si desidera creare una copia esatta di `person1` e assegnarla alla variabile `person2`, tuttavia utilizzando il metodo `Object.assign()` e modificando la proprietà `address`, questa viene modificata anche per l'oggetto `person1`. Come posso eseguire un "deep copying" dell'oggetto `person1`?

## Object References - Exercise 1

Creare all'interno dell'oggetto `person` i metodi: `fullName()` e `info()`, i quali utilizzano le proprietà dell'oggetto per stampare rispettivamente il nome completo e le informazioni anagrafiche comprensive di posizione lavorativa

## Object Methods - Exercise 1

Utilizzando l'oggetto `person` stampare in console i suoi valori nel seguente modo utilizzando il metodo `Object.keys`:

```
firstName: Mario
lastName: Rossi
age: 25
```

## Object Methods - Exercise 2

Utilizzando l'oggetto `person` stampare in console i suoi valori nel seguente modo utilizzando il metodo `Object.values`:

```
Mario
Rossi
25
```

## Object Constructor - Exercise 1

Creare l'oggetto `person` e definire al suo interno i metodi getters / setters per le proprietà: `firstName` e `lastName`. Definire all'interno dell'oggetto anche il metodo `fullName()` che si occupa di concatenare e restituire il nome e il cognome della persona. Infine, costruire due oggetti: `john` e `simon`, assegnare ad entrambi il valore di `firstName` e `lastName` e stampare in console il nome completo

## Object Constructor - Exercise 2

Implementare la funzione `Person` che accetta e assegna due argomenti: `firstName` e `lastName` e definisce il metodo `fullName()`, il quale si occupa di concatenare e restituire il nome completo. Infine, istanziare due oggetti: `john` e `simon` tramite la keyword `new` utilizzando la funzione `Person` e stampare in console il nome completo

## Optional Chaining - Exercise 1

In questo esempio si sta cercando di eseguire il console.log di due proprietà non presenti all'interno dell'oggetto `person`, come posso sistemare il codice d'esempio così da non ricevere un errore in console?

## Optional Chaining - Exercise 2

In questo esempio si sta cercando di controllare se è stato specificato un valore per la proprietà `city`, tuttavia il codice si presenta in maniera poco leggibile.
Come si può migliorare e semplificare il codice d'esempio?


## Array Methods - Exercise 1

Implementare la funzione `adultFilter` che, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni.

## Array Methods - Exercise 2

Implementare la funzione `nicknameMap` che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa modo: `<name>-<age>`.

Esempio:
```
{ name: 'Paul', age: 21 } => Paul-21
```

## Array Methods - Exercise 3

Implementare la funzione `ageAverage` che, dato un array di persone, calcola l'età media.

## Array Methods - Exercise 4

Implementare la funzione `uncompletedNotes` che, dato un array di note, restituisce soltanto le note non completate.
Una nota viene considerata completata se **tutti** i todo presenti hanno il flag `done` impostato a `true`.


## Array Methods - Exercise 5

Implementare la funzione `firstUncompletedNote` che, dato un array di note, restituisce la prima nota non completata.
Una nota viene considerata completata se **tutti** i todo presenti hanno il flag `done` impostato a `true`.


## Classes - Exercise 1

Definire la classe `Person` che accetta due parametri nel costruttore `firstName` e `lastName`

## Classes - Exercise 2

Definire la classe `Developer` che eredita dalla classe `Person` e, oltre alle proprietà `firstName` e `lastName`, accetta nel costruttore anche la proprietà `role`.

## Classes - Exercise 3

Definire all'interno della classe `Person` un metodo statico che, dato in input un object literal, istanzia un oggetto `Person`.

## Classes - Exercise 4

Definire la classe `BankAccount` che, dato in input un importo iniziale, consente di eseguire operazioni di deposito, ritiro e visualizzazione sul proprio conto corrente. La classe in questione dovrà implementare i seguenti metodi:

* `deposit`: un metodo pubblico che consente di aggiungere fondi al proprio conto corrente
* `withdraw`: un metodo pubblico che consente di ritirare fondi dal proprio conto corrente
* `view`: un metodo pubblico che consente di visualizzare in console il saldo finale del conto corrente

## Classes - Exercise 5

Definire la classe `BankAccountVip` che estendendo dalla classe `BankAccount`, oltre a consentire tutte le operazioni di quest'ultima, permette all'utente di ottenere un interesse del 3% sull'importo depositato, ma solo se quest'ultimo è maggiore o uguale a 1000€. Il risultato finale deve essere 5541.

## Classes - Exercise 6

Definire la classe `AreaCalculator` che, tramite un metodo statico, si occupa di calcolare l'area della figura passata come parametro. Il metodo deve essere capace di calcolare l'area del quadrato, rettangolo e cerchio.

## Classes - Exercise 7

Definire la classe `Person` che accetta tre parametri nel costruttore: `firstName`, `lastName` e `age` e definisce per ciascuna di queste tre proprietà i rispettivi metodi getters e setters. Definire inoltre anche il metodo getter `fullName` che si occupa di restituire le proprietà nome e cognome concatenate.

## Error handling - Exercise 1

Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
Il metodo `withdraw` deve poter lanciare un errore anche qualora venisse passato un `amount` superiore rispetto al totale presente sul conto corrente.

## Error handling - Exercise 2

L'esercizio precedente lanciava un errore durante la fase di prelevamento. In questo esercizio occorre gestire l'errore per evitare il crash dell'applicazione.

## Error handling - Exercise 3

Sostituire il lancio delle eccezioni con due classi custom che estendono dalla classe `Error`:

* `NegativeAmountError`: classe custom qualora viene fornito un importo negativo
* `WithdrawNotPermittedError`: classe custom qualora si cerca di ritirare dal proprio conto corrente un importo maggiore rispetto al totale consentito

## Destructuring assignment - Exercise 1

Utilizzare la destrutturazione, al posto di una variabile temporanea, per eseguire lo swapping delle variabili (per swapping s'intende lo scambio di valori tra due variabili).
Suggerimento: fare riferimento alla documentazione ufficiale <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

## Destructuring assignment - Exercise 2

Utilizzare la destrutturazione per eseguire l'assegnazione dei valori tramite un'unica linea di codice

## Destructuring assignment - Exercise 3

Utilizzare la destrutturazione per semplificare il controllo sull'età della persona, modificando il parametro della funzione.
Suggerimento: fare riferimento alla documentazione ufficiale <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>

## Destructuring assignment - Exercise 4

Utilizzare la destrutturazione per stampare la lista dei valori delle proprietà presenti in `person`:

```
id: 1
firstName: Mario
lastName: Rossi
age: 25
```

## Destructuring assignment - Exercise 5

La destrutturazione restituisce `undefined` per le proprietà: `name`, `surname` e `old`.
Sai sistemare il codice affinché, pur mantenendo gli stessi nomi di proprietà per l'oggetto `person`, posso eseguire una rinominazione in fase di destrutturazione?

## JSON methods - Exercise 1

Implementare il codice necessario per convertire l'oggetto `developer` in un json.

## JSON methods - Exercise 2

Implementare il metodo `fromJson` che accetta un json e istanzia un oggetto di tipo `Person`

## JSON methods - Exercise 3

In questo esercizio le cose non vanno come dovrebbero, nonostante abbia creato una copia di `person1`, modificando la proprietà `city` di `person2` viene modificato anche il valore per `person1`, questo avviene perché ho creato una shallow copy.
Come posso sistemare il codice affinché modificando il valore di `person2` questo non modifichi anche `person1`?

## JSON methods - Exercise 4

In questo esercizio occorre filtrare le proprietà dell'oggetto `person` affinché vengono codificate in json solo i valori numerici (vale a dire `id` e `age`).

## Rest parameters and spread syntax - Exercise 1

La funzione `sum` presenta un elevato numero di parametri in ingresso, come possiamo migliorare il codice affinché eccetti un numero indefinito di valori da sommare?

## Rest parameters and spread syntax - Exercise 2

Come posso migliorare la leggibilità del codice estraendo la proprietà `id` dall'oggetto `person` e mantenere aggregate il resto delle proprietà all'interno dell'oggetto `personInfo`?

## Rest parameters and spread syntax - Exercise 3

Come mergiare il valore di `newNumber` all'interno di `numberStore` senza utilizzare il metodo `push`?

## Rest parameters and spread syntax - Exercise 4

Come migliorare il codice affinché si eviti di specificare ad uno a uno i valori da passare alla funzione `sum`?

## Async Management - Exercise 1

Implementare la funzione `fetchPersonById`, la quale riceve in input un id e restituisce una `Promise` contenente l'oggetto della persona corrispondente a quell'id.

## Async Management - Exercise 2

Migliorare la funzione `fetchPersonById`, in modo tale che la `Promise` venga rigettata qualora non esiste una persona con l'id passato come parametro.

## Async Management - Exercise 3

Alla funzione `fetchPersonById` è stata aggiunta la chiamata a `JSON.stringify`, così facendo la `Promise`, una volta risolta, restituirà un oggetto persona sotto forma di json. Utilizzando la concatenazione delle `Promise`, implementare il codice necessario per parsare il json e stamparne il risultato in console.

## Async Management - Exercise 4

Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:
* La persona che ha come identificativo l'id passato come parametro
* Il tipo di lavoro che ha come identificativo l'id passato come parametro

Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato.
N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le `Promise` sono state risolte.

## Async Management - Exercise 5

Implementare le funzioni `fetchPersonById` e `fetchJobById`, le quali dato un id devono restituire rispettivamente:
* La persona che ha come identificativo l'id passato come parametro
* Il tipo di lavoro che ha come identificativo l'id passato come parametro

La prima funzione (`fetchPersonById`) deve restituire una `Promise` con un delay di 1000 millesecondi (`setTimeout`)
La prima funzione (`fetchJobById`) deve restituire una `Promise` con un delay di 500 millesecondi (`setTimeout`)

Infine implementare il codice necessario che si occupa di stampare in console il risultato della **prima** `Promise` che viene risolta.
N.B: esiste un metodo che, dato in input un array di `Promise`, attende fino a quando una delle `Promise` non viene risolta o rigettata.

## Async Management - Exercise 6

In questo esercizio occorre richiamare la funzione `fetchPersonById` passando come id il valore `2` e stampare il risultato restituito in console. Per ottenere il valore restituito dalla `Promise` utilizzare le keywords `async/await`.

## Async Management - Exercise 7

In questo esercizio è stato volutamente passato un id non valido alla funzione `fetchPersonById`. Implementare il codice necessario per gestire l'eccezione lanciata dalla `Promise`.

## Browser Storing Data - Exercise 1

Implementare il codice necessario per:

- Recuperare il post presente al seguente url: <https://jsonplaceholder.typicode.com/posts/1> al click del pulsante "Fetch Post"
- Salvare il post sul localStorage al click del pulsante "Save Post on LocalStorage"
- Per svolgere l'esercizio utilizzando Node, bisogna installare la libreria node-fetch, scrivendo nel terminale il seguente comando: npm i node-fetch.

## Browser Storing Data - Exercise 2

Implementare il codice necessario per:
* Recuperare il post presente all'interno del LocalStorage (salvato tramite l'esercizio precedente)
* Visualizzare all'interno dell'elemento `##post-title` il titolo del post recuperato dal LocalStorage

## Network Requests - Exercise 1

Implementare il codice necessario per recuperare tramite una richiesta HTTP la lista dei todos presente al seguente url: https://jsonplaceholder.typicode.com/todos. Successivamente creare dinamicamente una lista di elementi (`<li>`) contenente il titolo del todo (proprietà `title` presente nella collezione di oggetti restituiti dalla response) e appenderla all'elemento `.todo-list`.
N.B: il body della response contiene la lista dei todos in formato json, utilizzare il metodo `.json` presente nella response per eseguire la deserializzazione.

## Network Requests - Exercise 2

Implementare il codice necessario per recuperare tramite una richiesta HTTP il todo con id 4 tramite il seguente url: https://jsonplaceholder.typicode.com/todos/4. Successivamente creare due elementi:
* Un elemento `<h2>` contenente il titolo del todo (proprietà `title`)
* Un elemento `<input type="checkbox">` con la proprietà `checked` impostata al valore presente per la proprietà `completed` del todo

Appendere all'interno del container i due elementi precedentemente creati.

## Network Requests - Exercise 3

Implementare il codice necessario per eseguire una richiesta HTTP che si occupa di creare un nuovo post. Per creare un nuovo post utilizzare il seguente url: https://jsonplaceholder.typicode.com/posts (metodo: POST). Il corpo della richiesta deve contenere un oggetto post con le seguenti informazioni: `title` e flag `completed`. I dati del post dovranno essere trasmessi in seguito alla compilazione di un form.

## Dom Tree - Exercise 1

Implementare il codice necessario per recuperare il contenuto del campo di testo `firstName` e stamparlo in console.
N.B: utilizzare l'id come selettore

## Dom Tree - Exercise 2

Implementare il codice necessario per recuperare il contenuto del primo campo di testo e stamparlo in console.
N.B: utilizzare la classe come selettore

## Dom Tree - Exercise 3

Implementare il codice necessario per recuperare il valore di ciascun campo di input e della corrispettiva label associata.
In console occorrerà stampare il seguente risultato:
```
First Name: Mario
Last Name: Rossi
Age: 25
```

## Dom Tree - Exercise 4

Implementare il codice necessario per recuperare il valore di ciascun campo di input e creare un oggetto `person` contenente le proprietà: `firstName`, `lastName` e `age`. Infine recuperare l'elemento `form` e aggiungere l'attributo `data-person` contenente l'oggetto `person` in formato json.

## Dom Tree - Exercise 5

Implementare il codice necessario per creare una tabella le cui righe sono generate dinamicamente.
Al click del pulsante "Add Row" occorre richiamare la funzione `addRow`, la quale si occupa di creare dinamicamente un elemento `<tr>` contenente un campo di testo per ciascuna colonna: `firstName`, `lastName` e `age`. Appendere la riga generata al `<tbody>` della tabella.

## Dom Tree - Exercise 6

Implementare il codice necessario per generare dinamicamente il form `person-form`.
Al caricamento della pagina occorre creare ed eseguire la funzione `initForm` che si occuperà di generare dinamicamente e aggiungere al form i campi: `firstName`, `lastName` e `age`.
Al click del pulsante "Submit" del form richiamare il metodo `submitPersonForm`, il quale si dovrà occupare di:
* Prevenire l'evento di default che avviene al submit del form
* Creare un oggetto `person` contenente i valori del form popolato dall'utente
* Eseguire il `console.log` dell'oggetto `person` creato

## Dom Tree - Exercise 7

Dal codice precedente creare l'evento custom `personFormLoaded` da dispatchare una volta eseguito l'init del form (`initForm`).
Creare un listener per l'evento `personFormLoaded` che si occupa di stampare in console il messaggio "Person Form Loaded".

## Dom Tree - Exercise 8

Implementare il codice necessario per farsì che al passaggio del mouse sopra un elemento `.hero-list-item`, quest'ultimo venga evidenziato di rosso. Quando poi il mouse si sposta fuori dall'area dell'elemento, quest'ultimo deve ritornare ad avere il colore orginario (`transparent`)


