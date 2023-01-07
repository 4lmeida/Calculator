const inputNumber1 = document.querySelector("#number1");
inputNumber1.focus();
inputNumber1.addEventListener('keypress', handlerKeyPress);

const inputNumber2 = document.querySelector("#number2");
inputNumber2.addEventListener('keypress', handlerKeyPress);

const result = document.querySelector("#result-box");
const inputError = document.querySelector(".input-error").classList.remove("input-error");

const btnPlus = document.querySelector("#btn-plus").addEventListener('click', handlerBtnPlusClick);
const btnDiff = document.querySelector("#btn-diff").addEventListener('click', handlerBtnDiffClick);
const btnTimes = document.querySelector("#btn-times").addEventListener('click', handlerBtnTimesClick);
const btnDiv = document.querySelector("#btn-div").addEventListener('click', handlerBtnDivClick)
const btnClear = document.querySelector("#btn-clear").addEventListener('click', handlerBtnClearClick);
const btnNumbers = document.querySelector(".buttons-container").addEventListener('click', handlerBtnNumbersClick);
const numbers = [].map.call(document.querySelectorAll('#btn-numbers'), (el) => {
    return el.innerHTML;
})
console.log(numbers);
 
function handlerBtnPlusClick(event) {
    event.preventDefault();
    testError(inputNumber1.value, inputNumber2.value);

    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        result.innerHTML = Number(inputNumber1.value) + Number(inputNumber2.value);   
    }
    
}

function handlerBtnDiffClick(event) {
    event.preventDefault();
    testError(inputNumber1.value, inputNumber2.value);

    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        result.innerHTML = Number(inputNumber1.value) - Number(inputNumber2.value);   
    }
    
}

function handlerBtnTimesClick(event) {
    event.preventDefault();
    testError(inputNumber1.value, inputNumber2.value)

    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        result.innerHTML = Number(inputNumber1.value) * Number(inputNumber2.value);   
    }
}

function handlerBtnDivClick(event) {
    event.preventDefault();
    testError(inputNumber1.value, inputNumber2.value);

    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        if(Number(inputNumber2.value) != 0) {
            result.innerHTML = Number(inputNumber1.value) / Number(inputNumber2.value);
        }
        else {
            result.innerHTML = 'Impossible';
            number2.classList.add("input-error")
        }
           
    }
}

function handlerBtnNumbersClick(event) {
    event.preventDefault();
    console.log("test");

    
    console.log(btnNumbers);
    //inputNumber1.value = event.target.value
}

function handlerBtnClearClick(event) {
    event.preventDefault();
    inputNumber1.value = inputNumber2.value = "";
    result.innerHTML = 0;
    inputNumber1.focus();
    number1.classList.remove("input-error");
    number2.classList.remove("input-error");
}

function testError(n1, n2) {

    if(isNumber(n1)) {
        number1.classList.remove("input-error");
    }
    else {
        number1.classList.add("input-error");
    }

    if(isNumber(n2)) {
        number2.classList.remove("input-error");
    }
    else {
        number2.classList.add("input-error");     
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} 

function handlerKeyPress(event) {
    let theEvent = event;
    let key = event.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9.]+$/;
    if(!regex.test(key)) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}




