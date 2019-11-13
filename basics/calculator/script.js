let global_result = 0;
let new_number = 0
const textbox = document.querySelector(".board");
console.log(textbox);
function plus(){
    
}

function divide(){
    
}

function multiplication(){
    
}

function minus(){
    
}

function equals(){
    
}

function number(n){
    if(textbox.innerText === '0'){
        textbox.innerText = `${n}`
    }
    else{
        let value = textbox.innerText;
        textbox.innerText = `${value}${n}`;
    }
}

