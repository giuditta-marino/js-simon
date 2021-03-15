$(document).ready(function() {

  // GENERO PER 5 VOLTE UN NUMERO CASUALE IN UN RANGE
  var arrayNumeri = [];
  var arrayNumeriIndovinati=[];

  var numeriComputer = numberRandomInRange(arrayNumeri, 10);
  console.log(numeriComputer);

    var count = 0;
    var timer = setInterval(function(){
      if (count = 5) {
        clearInterval(timer);
        for (var i = 0; i < 5; i++) {
          var numeroUtente = parseInt(prompt("Inserisci i 5 numeri visti poco fa:"));
          console.log(numeroUtente);
            if (numeriComputer.includes(numeroUtente)) {
              arrayNumeriIndovinati.push(numeroUtente);
              console.log('hai fatto' + arrayNumeriIndovinati.length + 'punti. I numeri indovinati sono:' + arrayNumeriIndovinati);
            } else {
              console.log(i);
              console.log('questo numero non era tra quelli mostrati prima, hai altre' + (5-(i+1)) + 'possibilità');
            }
        }

      } else {
        console.log(count);
      }
      count++;
    }, 1000);



  function numberRandomInRange(array, max){
    while (array.length < 5) {
       var numberComputer = Math.floor(Math.random() * (max - 1 + 1) + 1);
      if (!(array.includes(numberComputer))) {
        array.push(numberComputer);
      }
    }
    return array;
  }
  // ALLA FINE DI QUESTA OPERAZIONE, FACCIO PARTIRE UN TIMER DI 30 SECONDI

  // CREO PROMPT TRAMITE CUI L'UTENTE DEVE INSERIRE 5 NUMERI

  // SE IL NUMERO E' NELLA LISTA DI QUELLI GENERATI, L'UTENTE FA UN PUNTO

  // COMUNICO ALL'UTENTE QUANTI PUNTI HA FATTO E QUALI NUMERI HA INDOVINATO





})
