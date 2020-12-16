let div1 = document.querySelector("#exo-1")
let div2 = document.querySelector("#exo-2")
var input1 = document.getElementsByTagName('input')[0]
var input2 = document.getElementsByTagName('input')[1]
var input3 = document.getElementsByTagName('input')[2]
var input4 = document.getElementsByTagName('input')[3]
var input5 = document.getElementsByTagName('input')[4]
var input6 = document.getElementsByTagName('input')[5]
var input7 = document.getElementsByTagName('input')[6]
var input8 = document.getElementsByTagName('input')[7]
let valueInput1
let valueInput2
let valueInput3
let valueInput4
let valueInput5
let valueInput6
let yo
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
console.log(btn1);
console.log(btn2);

var input1 = div4.querySelectorAll("input")[0]
console.log(input1);
//fin var

//exo1

input1.addEventListener('blur', function () {
    valueInput1 = Number(input1.value)
    console.log(valueInput1)
})

input2.addEventListener('blur', function () {
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
console.log(btn1.value);

btn1.addEventListener('click', function(){
    btn1value = Number(btn1.value)
    yo += btn1value
})
btn2.addEventListener('click', function(){
    btn2value = Number(btn2.value)
    yo += btn2value
})

console.log(yo);