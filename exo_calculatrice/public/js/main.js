let div1 = document.querySelector("#exo-1")
let div2 = document.querySelector("#exo-2")
var input1 = document.getElementsByTagName('input')[0]
var input2 = document.getElementsByTagName('input')[1]
var input3 = document.getElementsByTagName('input')[2]
var input4 = document.getElementsByTagName('input')[3]
var input5 = document.getElementsByTagName('input')[4]
var input6 = document.getElementsByTagName('input')[5]
var input7 = document.getElementsByTagName('input')[6]
var input8 = document.getElementsByTagName('input')[7];

var valueInput1;
let valueInput2;
let valueInput3
let valueInput4
let valueInput5
let valueInput6
let valueInput7
var valueInput8;

let yo
let yo2
let button1 = div1.querySelector('.btn')
var button2 = div2.querySelector('button')

var btn1value
var btn2value

var selector = document.querySelector('select')
console.log(selector[1]);

let reponse = document.querySelector('#response1')
let reponse2 = document.querySelector('#response2')
console.log(reponse);

//exo3 var

let div3 = document.querySelector("#exo-3")
var button3 = div3.querySelectorAll('button')[0]

var plus = div3.querySelectorAll('button')[1]
var moins = div3.querySelectorAll('button')[2]
var fois = div3.querySelectorAll('button')[3]
var divise = div3.querySelectorAll('button')[4]

let reponse3 = document.querySelector('#response3')

//exo4 var

let div4 = document.querySelector("#exo-4")

var btn1 = div4.querySelectorAll('.m-1')[0]
var btn2 = div4.querySelectorAll('.m-1')[1]
var btn3 = div4.querySelectorAll('.m-1')[2]
var btn4 = div4.querySelectorAll('.m-1')[3]
var btn5 = div4.querySelectorAll('.m-1')[4]
var btn6 = div4.querySelectorAll('.m-1')[5]
var btn7 = div4.querySelectorAll('.m-1')[6]
var btn8 = div4.querySelectorAll('.m-1')[7]
var btn9 = div4.querySelectorAll('.m-1')[8]
var btn0 = div4.querySelectorAll('.m-1')[9]

var btnplus = div4.querySelectorAll('.m-1')[10]
var btnminus = div4.querySelectorAll('.m-1')[11]
var btnmuti = div4.querySelectorAll('.m-1')[12]
var btndivi = div4.querySelectorAll('.m-1')[13]

var btnegal = div4.querySelectorAll('.btn')[0]
console.log(btnegal);

let entr1
let entr2

let tab = []

let reponse4 = document.querySelector('#response4')
//fin var

//exo1

input1.addEventListener('change', function () {
    valueInput1 = Number(input1.value)
    console.log(valueInput1)
})

input2.addEventListener('change', function () {
    valueInput2 = Number(input2.value)
    console.log(valueInput2)
})

button1.addEventListener('click', function () {
    reponse.innerHTML = valueInput1 + valueInput2;

    console.log(reponse);
})

//exo2

input3.addEventListener('change', function () {
    valueInput3 = Number(input3.value)
    console.log(valueInput3)
})

input4.addEventListener('change', function () {
    valueInput4 = Number(input4.value)
    console.log(valueInput4)
})
console.log(
    selector.value);

button2.addEventListener('click', function () {
    switch (selector.value) {
        case "+":
            reponse2.innerHTML = valueInput3 + valueInput4;
            console.log(reponse2.innerHTML);
            break
        case "-":
            reponse2.innerHTML = valueInput3 - valueInput4;
            console.log(reponse2.innerHTML);
            break
        case "*":
            reponse2.innerHTML = valueInput3 * valueInput4;
            console.log(reponse2.innerHTML);
            break
        case "/":
            reponse2.innerHTML = valueInput3 / valueInput4;
            console.log(reponse2.innerHTML);
            break
        default:
            console.log("error"); 
    }
})

//exo3
input5.addEventListener('change', function () {
    valueInput5 = Number(input5.value)
    console.log(valueInput5)
})

input6.addEventListener('change', function () {
    valueInput6 = Number(input6.value)
    console.log(valueInput6)
})

plus.addEventListener('click',function(){
    yo = valueInput6 + valueInput5
    console.log(yo);
 })
 moins.addEventListener('click',function(){
    yo = valueInput5 - valueInput6
    console.log(yo);
 })
 fois.addEventListener('click',function(){
    yo = valueInput6 * valueInput5
    console.log(yo);
 })
 divise.addEventListener('click',function(){
    yo = valueInput5 / valueInput6
    console.log(yo);
 })

 button3.addEventListener('click',function(){
    reponse3.innerHTML = yo
})

//exo4
input7.addEventListener('change', function () {
    valueInput7 = Number(input7.value)
    console.log(valueInput7)
})

input8.addEventListener('change', function () {
    valueInput8 = Number(input8.value)
    console.log(valueInput8)
})


btn0.addEventListener('click', function () {
    if (tab.length == 0){
        input7.value = input7.value + "0"
        console.log(input7.value)
    }
    else{
        input8.value = input8.value + "0"
        console.log(input8.value)
    }

})
btn1.addEventListener('click', function () {
    if (tab.length == 0){
        button1.value = "1"
        input7.value = input7.value + "1"
        console.log(input7.value)
    }
    else{
        button1.value = "1"
        input8.value = input8.value + "1"
        console.log(input8.value)
    }

})
btn2.addEventListener('click', function () {
    if (tab.length == 0){
        input7.value = input7.value + "2"
        console.log(input7.value)
    }
    else{
        input8.value = input8.value + "2"
        console.log(input8.value)
    }

})
btn3.addEventListener('click', function () {
    if (tab.length == 0){
        input7.value = input7.value + "3"
        console.log(input7.value)
    }
    else{
        input8.value = input8.value + "3"
        console.log(input8.value)
    }

})
btn4.addEventListener('click', function () {
    if (tab.length == 0){
        input7.value = input7.value + "4"
        console.log(input7.value)
    }
    else{
        input8.value = input8.value + "4"
        console.log(input8.value)
    }

})
btn5.addEventListener('click', function () {
    if (tab.length == 0){
        input7.value = input7.value + "5"
        console.log(input7.value)
    }
    else{
        button1.value = "1"
        input8.value = input8.value + "5"
        console.log(input8.value)
    }

})
btn6.addEventListener('click', function () {
    if (tab.length == 0){
        button1.value = "1"
        input7.value = input7.value + "6"
        console.log(input7.value)
    }
    else{
        button1.value = "1"
        input8.value = input8.value + "6"
        console.log(input8.value)
    }

})
btn7.addEventListener('click', function () {
    if (tab.length == 0){
        button1.value = "1"
        input7.value = input7.value + "7"
        console.log(input7.value)
    }
    else{
        button1.value = "1"
        input8.value = input8.value + "7"
        console.log(input8.value)
    }

})
btn8.addEventListener('click', function () {
    if (tab.length == 0){
        button1.value = "1"
        input7.value = input7.value + "8"
        console.log(input7.value)
    }
    else{
        button1.value = "1"
        input8.value = input8.value + "8"
        console.log(input8.value)
    }

})
btn9.addEventListener('click', function () {
    if (tab.length == 0){
        button1.value = "1"
        input7.value = input7.value + "9"
        console.log(input7.value)
    }
    else{
        button1.value = "1"
        input8.value = input8.value + "9"
        console.log(input8.value)
    }

})

btnplus.addEventListener('click', function () {
    yo2 = "+"
    entr1 = Number(input7.value)
    tab.push(entr1)

    console.log(tab);

})

btnminus.addEventListener('click', function () {
    yo2 = "-"
    entr1 = Number(input7.value)
    tab.push(entr1)

    console.log(tab);

})

btnmuti.addEventListener('click', function () {
    yo2 = "*"
    entr1 = Number(input7.value)
    tab.push(entr1)

    console.log(tab);

})

btndivi.addEventListener('click', function () {
    yo2 = "/"
    entr1 = Number(input7.value)
    tab.push(entr1)

    console.log(tab);

})

btnegal.addEventListener('click', function () {
    switch (yo2){
        case "+":
            console.log("yo");
        entr2 =Number(input8.value)
        tab.push(entr2)
        reponse4.innerHTML = Number(tab[0]) + Number(tab[1])
        console.log(Number(tab[0]) + Number(tab[1]));
        input7.value = ""
        input8.value = ""
        tab = []
            break

            case "-":
            console.log("yo");
            console.log("yo");
        entr2 =Number(input8.value)
        tab.push(entr2)
        reponse4.innerHTML = Number(tab[0]) - Number(tab[1])
        console.log(Number(tab[0]) - Number(tab[1]));
        tab = []
        input7.value = ""
        input8.value = ""
            break
            case "*":
            console.log("yo");
            console.log("yo");
        entr2 =Number(input8.value)
        tab.push(entr2)
        reponse4.innerHTML = Number(tab[0]) * Number(tab[1])
        console.log(Number(tab[0]) * Number(tab[1]));
        input7.value = ""
        input8.value = ""
        tab = []
            break
            case "/":
                console.log("yo");
        entr2 =Number(input8.value)
        tab.push(entr2)
        reponse4.innerHTML = Number(tab[0]) / Number(tab[1])
        console.log(Number(tab[0]) / Number(tab[1]));
        input7.value = ""
        input8.value = ""
        tab = []
            console.log("yo");
            break
    }   
})