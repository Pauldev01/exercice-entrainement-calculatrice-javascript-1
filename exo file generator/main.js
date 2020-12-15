let section = document.createElement('section')
document.body.append(section)

let div1 = document.createElement('div')
// section.prepend(div1)

let div2 = document.createElement('div')
// section.append(div2)

let div3 = document.createElement('div')
// section.append(div3)

let divchange = document.createElement('div')
section.append(div1,div2,div3,divchange)


divchange.style.width = "500px"
divchange.style.height = "200px"



let tittle = document.createElement('h1')
tittle.innerHTML = "Le Dom -Exo:StyleGenerator"

let button1 = document.createElement('button')
button1.innerHTML = "W"
button1.style.backgroundColor = "lightgrey"
button1.style.border = "none"
button1.style.height = "30px"
button1.style.width = "30px"
button1.style.borderRadius = "5px"
button1.style.margin = "2px"
button1.addEventListener('click',function(){
    divchange.style.backgroundColor = "lightgrey"
})

let button2 = document.createElement('button')
button2.innerHTML = "R"
button2.style.backgroundColor = "red"
button2.style.border = "none"
button2.style.height = "30px"
button2.style.width = "30px"
button2.style.borderRadius = "5px"
button2.style.margin = "2px"
button2.addEventListener('click',function(){
    divchange.style.backgroundColor = "red"
})

let button3 = document.createElement('button')
button3.innerHTML = "G"
button3.style.backgroundColor = "green"
button3.style.border = "none"
button3.style.height = "30px"
button3.style.width = "30px"
button3.style.borderRadius = "5px"
button3.style.margin = "2px"
button3.addEventListener('click',function(){
    divchange.style.backgroundColor = "green"
})

let button4 = document.createElement('button')
button4.innerHTML = "P"
button4.style.backgroundColor = "purple"
button4.style.border = "none"
button4.style.height = "30px"
button4.style.width = "30px"
button4.style.borderRadius = "5px"
button4.style.margin = "2px"
button4.addEventListener('click',function(){
    divchange.style.backgroundColor = "purple"
})

let button5 = document.createElement('button')
button5.style.border = "solid black 3px"
button5.style.height = "25px"
button5.style.width = "40px"
button5.style.borderRadius = "5px"
button5.style.margin = "2px"
button5.addEventListener('click',function(){
    divchange.style.border = "solid black 3px"
})

let button6 = document.createElement('button')
button6.style.border = "dotted black 3px"
button6.style.height = "25px"
button6.style.width = "40px"
button6.style.borderRadius = "5px"
button6.style.margin = "2px"
button6.addEventListener('click',function(){
    divchange.style.border = "dotted black 3px"
})

let button7 = document.createElement('button')
button7.style.border = "solid grey 1px"
button7.style.height = "25px"
button7.style.width = "40px"
button7.style.borderRadius = "5px"
button7.style.margin = "2px"
button7.addEventListener('click',function(){
    divchange.style.border = "solid grey 1px"
})

let button8 = document.createElement('button')
button8.innerHTML = "top"
button8.style.border = "none"
button8.style.height = "25px"
button8.style.width = "40px"
button8.style.borderRadius = "5px"
button8.style.margin = "2px"
button8.addEventListener('click',function(){
    divchange.style.border = "none"
})

let button9 = document.createElement('button')
button9.innerHTML = "top"
button9.style.border = "none"
button9.style.borderTop = "solid red 2px"
button9.style.height = "25px"
button9.style.width = "40px"
button9.style.borderRadius = "5px"
button9.style.margin = "2px"
button9.addEventListener('click',function(){
    divchange.style.borderTop = "solid red 2px"
})

let button10 = document.createElement('button')
button10.innerHTML = "top"
button10.style.border = "none"
button10.style.borderTop = "solid red 5px"
button10.style.height = "25px"
button10.style.width = "40px"
button10.style.borderRadius = "5px"
button10.style.margin = "2px"
button10.addEventListener('click',function(){
    divchange.style.borderTop = "solid red 5px"
})

div1.append(tittle,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,)

let input = document.createElement('input')
input.type = "color"
input.addEventListener('blur',function(){
    console.log(input.value);
    divchange.style.borderColor = input.value
})
let buttona = document.createElement('button')
buttona.style.border = "solid black 3px"
buttona.style.height = "25px"
buttona.style.width = "40px"
buttona.style.borderRadius = "5px"
buttona.style.margin = "2px"
buttona.addEventListener('click',function(){
    divchange.style.border = "solid black 3px"
})
let buttonb = document.createElement('button')
buttonb.style.border = "none"
buttonb.style.borderTop = "solid black 3px"
buttonb.style.height = "25px"
buttonb.style.width = "40px"
buttonb.style.borderRadius = "5px"
buttonb.style.margin = "2px"
buttonb.addEventListener('click',function(){
    divchange.style.borderTop = "solid black 3px"
})
let buttonc = document.createElement('button')
buttonc.style.border = "none"
buttonc.style.borderRight = "solid black 3px"
buttonc.style.height = "25px"
buttonc.style.width = "40px"
buttonc.style.borderRadius = "5px"
buttonc.style.margin = "2px"
buttonc.addEventListener('click',function(){
    divchange.style.borderRight = "solid black 3px"
})
let buttond = document.createElement('button')
buttond.style.border = "none"
buttond.style.borderLeft = "solid black 3px"
buttond.style.height = "25px"
buttond.style.width = "40px"
buttond.style.borderRadius = "5px"
buttond.style.margin = "2px"
buttond.addEventListener('click',function(){
    divchange.style.borderLeft = "solid black 3px"
})
let buttone = document.createElement('button')
buttone.style.border = "none"
buttone.style.borderBottom = "solid black 3px"
buttone.style.height = "25px"
buttone.style.width = "40px"
buttone.style.borderRadius = "5px"
buttone.style.margin = "2px"
buttone.addEventListener('click',function(){
    divchange.style.borderBottom = "solid black 3px"
})

div2.append(input,buttona,buttonb,buttonc,buttond,buttone)



let button1a = document.createElement('button')
button1a.style.border = "solid black 3px"
button1a.style.height = "25px"
button1a.style.width = "40px"
button1a.style.borderRadius = "30%"
button1a.style.margin = "2px"
button1a.addEventListener('click',function(){
    divchange.style.borderRadius = "30px"
})

let button2a = document.createElement('button')
button2a.style.border = "solid black 3px"
button2a.style.height = "25px"
button2a.style.width = "40px"
button2a.style.borderRadius = "25% 0% 0% 0%"
button2a.style.margin = "2px"
button2a.addEventListener('click',function(){
    divchange.style.border = "solid black 3px"
    divchange.style.borderRadius = "30px 0px 0px 0px"
})

let button3a = document.createElement('button')
button3a.style.border = "solid black 3px"
button3a.style.height = "25px"
button3a.style.width = "40px"
button3a.style.borderRadius = "0% 25% 0% 0%"
button3a.style.margin = "2px"
button3a.addEventListener('click',function(){
    divchange.style.border = "solid black 3px"
    divchange.style.borderRadius = "0px 30px 0px 0px"
})

let button4a = document.createElement('button')
button4a.style.border = "solid black 3px"
button4a.style.height = "25px"
button4a.style.width = "40px"
button4a.style.borderRadius = "0% 0% 25% 0%"
button4a.style.margin = "2px"
button4a.addEventListener('click',function(){
    divchange.style.border = "solid black 3px"
    divchange.style.borderRadius = "0px 0px 30px 0px"
})

let button5a = document.createElement('button')
button5a.style.border = "solid black 3px"
button5a.style.height = "25px"
button5a.style.width = "40px"
button5a.style.borderRadius = "0% 0% 0% 25%"
button5a.style.margin = "2px"
button5a.addEventListener('click',function(){
    divchange.style.border = "solid black 3px"
    divchange.style.borderRadius = "0px 0px 0px 30px"
})

div3.append(button1a,button2a,button3a,button4a,button5a)