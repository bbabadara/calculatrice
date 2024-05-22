const numbers=document.getElementsByClassName("numbers")
const operators=document.getElementsByClassName("operator")
const zero=document.getElementById("zero")
const egal=document.getElementById("egal")
const reset=document.getElementById("reset")

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
