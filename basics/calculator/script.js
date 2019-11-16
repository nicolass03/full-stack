let global_result = 0;
let new_number = 0;
let operation = "none";
const textbox = document.querySelector(".board");

function clear(){
    global_result = 0;
    new_number = 0;
    textbox.innerHTML = "0";
}

function backspace(){
    var n = textbox.innerHTML;
    n = n.substring(0, n.length - 1);
    textbox.innerHTML = n;
}

function plus(){
    global_result = Number(textbox.innerHTML);
    textbox.innerHTML = "0";
    operation = "sum";
}

function divide(){
    global_result = Number(textbox.innerHTML);
    textbox.innerHTML = "0";
    operation = "division";
}

function multiplication(){
    global_result = Number(textbox.innerHTML);
    textbox.innerHTML = "0";
    operation = "multiplication";
}

function minus(){
    global_result = Number(textbox.innerHTML);
    textbox.innerHTML = "0";
    operation = "minus";
}

function equals(){
    new_number = Number(textbox.innerHTML);
    if(operation === 'sum'){
        let res = Number(global_result) + Number(new_number);
        textbox.innerHTML = String(res);
        new_number = 0;
    }
    else if(operation === 'minus'){
        let res = Number(global_result) - Number(new_number);
        textbox.innerHTML = String(res);
        new_number = 0;    
    }
    else if(operation === 'multiplication'){
        let res = Number(global_result) * Number(new_number);
        textbox.innerHTML = String(res);
        new_number = 0;
    }
    else if(operation === 'division'){
        let res = Number(global_result) / Number(new_number);
        textbox.innerHTML = String(res);
        new_number = 0;
    }
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

