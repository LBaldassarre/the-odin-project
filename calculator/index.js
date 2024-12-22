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

    operatorsSelected = [];
    
    switch (operator) {
        case "^":
            screen.innerHTML = String(power(firstNum, secondNum)) + nextOperator;
            break;
        case decodeHtml("&#247;"):
            screen.innerHTML = String(divide(firstNum, secondNum)) + nextOperator;
            break;
        case decodeHtml("&#215;"):
            screen.innerHTML = String(multiply(firstNum, secondNum)) + nextOperator;
            break;
        case decodeHtml("&#8722;"):
            screen.innerHTML = String(subtract(firstNum, secondNum)) + nextOperator;
            break;
        case decodeHtml("&#43;"):
            screen.innerHTML = String(add(firstNum, secondNum)) + nextOperator;
            break;
    }
}

function clearAndBackspace (value) {
    switch (value) {
        case "backspace":
            screen.innerHTML = screen.innerHTML.slice(0, -1);
            break;
        case "clear":
            screen.innerHTML = "0";
            break;
        default:
            screen.innerHTML
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
            !screen.innerHTML.includes(".") ? screen.innerHTML += value : screen.innerHTML;
            break;
        default:
            screen.innerHTML === "0" ? screen.innerHTML = value : screen.innerHTML += value;
    }
}

function inputToScreen (value) {
    screen.innerHTML.length < 10 
        ? displayInScreen(value) 
        : clearAndBackspace(value);
}

function canBeEvaluated (str) {
    return operators.some(item => str.includes(item));
}

function handleButton (event) {
    const value = this.attributes.data.value;
    if (operators.includes(value)) operatorsSelected.push(value);
    const calculate = canBeEvaluated(screen.innerHTML) && operators.includes(value);

    calculate ? evaluate(screen.innerHTML, operatorsSelected) : inputToScreen(value);
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