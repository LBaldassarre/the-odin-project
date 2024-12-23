function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function power (a, b) {
    return Math.pow(a, b);
}


function evaluate (str) {
    const operator = operatorsSelected[0];
    const nextOperator = operatorsSelected[1] === decodeHtml("&#61;") ? "" : operatorsSelected[1];
    const operatorIndex = str.indexOf(operator);
    const firstNum = parseFloat(str.substring(0, operatorIndex));
    const secondNum = parseFloat(str.substring(operatorIndex + 1));
    let result = 0;
    
    switch (operator) {
        case "^":
            result = power(firstNum, secondNum);
            break;
        case decodeHtml("&#247;"):
            result = divide(firstNum, secondNum);
            break;
        case decodeHtml("&#215;"):
            result = multiply(firstNum, secondNum);
            break;
        case decodeHtml("&#8722;"):
            result = subtract(firstNum, secondNum);
            break;
        case decodeHtml("&#43;"):
            result = add(firstNum, secondNum);
            break;
    }

    nextOperator === "" 
        ? operatorsSelected = []
        : operatorsSelected = [operatorsSelected[1]];
    screen.innerHTML = String(Number.isInteger(result) ? result : parseFloat(result).toFixed(1)) + nextOperator;

    
}

function dotCap (str) {
    if (operatorsSelected.length === 0) {
        if (str.includes(".")) return true;
    } else {
        const operator = operatorsSelected[0];
        const operatorIndex = str.indexOf(operator);
        const secondNum = operatorIndex < str.length 
                            ? str.substring(operatorIndex + 1)
                            : "";
        if (secondNum.includes(".") ) return true;
    }
    
}

function displayInScreen (value) {
    switch (value) {
        case "backspace":
            screen.innerHTML = screen.innerHTML.slice(0, -1);
            break;
        case "clear":
            screen.innerHTML = "0";
            break;
        case ".":
            !dotCap(screen.innerHTML) ? screen.innerHTML += value : screen.innerHTML;
            break;
        default:
            screen.innerHTML === "0" ? screen.innerHTML = value : screen.innerHTML += value;
    }
}


function canBeEvaluated (str) {
    return operators.some(item => str.includes(item));
}

function handleButton (event) {
    const value = this.attributes.data.value;
    if (operators.includes(value)) operatorsSelected.push(value);
    const calculate = canBeEvaluated(screen.innerHTML) && operators.includes(value);
    
    calculate 
        ? evaluate(screen.innerHTML, operatorsSelected) 
        : displayInScreen(value);
    
}


const operators = [
    "^", 
    decodeHtml("&#247;"), 
    decodeHtml("&#215;"),
    decodeHtml("&#8722;"),
    decodeHtml("&#43;"),
    decodeHtml("&#61;")
];

let operatorsSelected = [];

var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('button');

buttons.forEach(
    button => {button.addEventListener('click', handleButton)}
);