const numbers=document.getElementsByClassName("numbers")
const operators=document.getElementsByClassName("operator")
const zero=document.getElementById("zero")
const egal=document.getElementById("egal")
const reset=document.getElementById("reset")
const percent=document.getElementById("percent")
const sqr=document.getElementById("sqr")
for (let i = 0; i <numbers.length; i++) {
   numbers[i].addEventListener("click",function(){
    if (zero.innerHTML==0) {
        zero.innerHTML=numbers[i].innerHTML
    }else{
        zero.innerHTML+=numbers[i].innerHTML
    }
   })  
}
for (let i = 0; i <operators.length; i++) {
   operators[i].addEventListener("click",function(){
        zero.innerHTML+=operators[i].innerHTML
   })
    
}
egal.addEventListener("click",function(){
    zero.innerHTML=eval(zero.innerHTML)
})
reset.addEventListener("click",function(){
    zero.innerHTML=0
})
percent.addEventListener("click",function(){
    zero.innerHTML=zero.innerHTML/100
})
sqr.addEventListener("click",function(){
    zero.innerHTML=Math.pow(zero.innerHTML,2)
})

