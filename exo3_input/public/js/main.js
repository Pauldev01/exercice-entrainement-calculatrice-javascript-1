// EXO 3 - Input

// HTML* (ou via le main.js)
// Créez tous les éléments nécessaires dans ton HTML:
// - 2 'input' de type "number"
// - 2 'button' pour les opérations avec comme contenu : "+" et "-"
// - 1 'button' pour enclencher(afficher) le résultat
// et insérez un élément avec comme contenu le résultat de l'opération.
let inValeur1;
let inValeur2;
let input1 = document.createElement('input')
let input2 = document.createElement('input')

let button1 = document.createElement('button')
button1.innerHTML = "+"
let button2 = document.createElement('button')
button2.innerHTML = "-"
let button3 = document.createElement('button')
button3.innerHTML = "="
let resultat = document.createElement('span')
resultat.style.backgroundColor = "red"
resultat.style.width = "50px"
resultat.style.height = "50px"
let yo = document.createElement('span')

document.body.prepend(input1,input2,button1,button2,button3,resultat)
// *main.js*
// Déclarez les variables dont vous aurez besoin pour commencer.
// Stockez dans une nouvelles variable la valeur du bouton cliqué pour pouvoir la réutiliser.
input1.addEventListener('blur',function(){
    inValeur1=Number(input1.value)
    console.log(inValeur1);
})
button1.addEventListener('click',function(){
   yo = inValeur1 + inValeur2
   console.log(yo);
})
button2.addEventListener('click',function(){
    yo = inValeur1 - inValeur2
   console.log(yo);
})

button3.addEventListener('click',function(){
    resultat.innerHTML = yo
})
input2.addEventListener('blur',function(){
    inValeur2=Number(input2.value)
    console.log(inValeur2);
})
// Faites en sorte qu'en cliquant sur le bouton "RESULTAT", le calcul s'effectue.
// Pour finir, affichez le résultat par le moyen que vous préférez.


// /!\ Faites attention à la valeur des inputs

// Un preview est disponible dans ce dossier :)
// En gros:
// Je rentre un nombre dans le 1er input, j'appuie sur l'opérateur que je veux, je remplis le second input avec un chiffre et je clique sur le bouton RESULTAT => Là mon résultat doit s'afficher

// BONUS:
// Vous pouvez faire en sorte que le background des boutons "opérateurs" change après avoir cliqué dessus.
