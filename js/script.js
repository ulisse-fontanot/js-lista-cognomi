var membri = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
var nuovoNome = prompt('Inserisci il tuo nome');
var primaLettera = nuovoNome.charAt(0).toUpperCase();
var restoNome = nuovoNome.substring(1).toLowerCase();
var nuovoNome = primaLettera + restoNome;
membri.push(nuovoNome);

for (var i = 0; i < membri.length; i++){
  membri.sort();
  console.log(membri[i]);
}

var a = membri.indexOf(nuovoNome) +1;
console.log(a);

document.getElementById('lista').innerHTML = membri;
document.getElementById('lista').innerHTML += " " + a;
