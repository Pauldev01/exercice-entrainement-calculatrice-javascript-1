// // EXO 2 - Input

// *Uniquement à l'aide du main.js*
// Commencez par créer 4 labels : Nom, Prénom, Age et Adresse e-mail.
// Ensuite, créez 4 inputs (/!\ aux valeurs que vous les assignerez).
for (i=0;i<4;i++){
    if(i==0){
        let input1 = document.createElement('input')
        document.body.appendChild(input1)
        let label1 = document.createElement('label')
        document.body.appendChild(label1)
        label1.innerHTML = "nom"
        input1.addEventListener('dblclick', function(){
            inValeur = input1.value;
            console.log(inValeur);
        })
        console.log(input1);
        console.log(input1.value)
    }
    else if(i==1){
        let input2 = document.createElement('input')
        document.body.appendChild(input2)
        let label2 = document.createElement('label')
        document.body.appendChild(label2)
        label2.innerHTML = "prenom"
        input2.addEventListener('dblclick', function(){
            inValeur = input2.value;
            console.log(inValeur);
        })
        console.log(input2);
        console.log(input2.value)
    }
    else if(i==2){
        let input3 = document.createElement('input')
        document.body.appendChild(input3)
        let label3 = document.createElement('label')
        document.body.appendChild(label3)
        label3.innerHTML = "age"
        input3.addEventListener('dblclick',function(){
            inValeur = Number(input3.value)
            if (inValeur <=18){
                console.log("tu est mineur tu as " + inValeur);
            }
            else{
                console.log("go in");
            }
        })
    }
    else if(i==3){
        let input4 = document.createElement('input')
        document.body.appendChild(input4)
        let label4 = document.createElement('label')
        document.body.appendChild(label4)
        label4.innerHTML = "e-mail"
    }
}



// Mettez vos balises dans le bon ordre, de sorte que cela fasse : label1 input1, label2 input2, label3 input3, label4 input4.


// Ciblez la bonne balise et stockez sa valeur.


// L'inscription sera conclue à l'aide d'un event "double clic" (sur toute la page)


// Si l'utilisateur est majeur affichez : Vous avez X ans : Inscription réussie`.
// Au contraire, si l'utilisateur est mineur, affichez : Vous avez X ans : Accès refusé aux mineurs