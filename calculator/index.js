function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const operators = [
        "^", 
        decodeHtml("&#247;"), 
        decodeHtml("&#215;"),
        decodeHtml("&#8722;"),
        decodeHtml("&#43;"),
        decodeHtml("&#61;")
    ]

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
    switch (true) {
        case str.includes("^"):
            console.log(str, "^");
            break;
        case str.includes(decodeHtml("&#247;")):
            console.log(str, decodeHtml("&#247;"));
            break;
        case str.includes(decodeHtml("&#215;")):
            console.log(str, decodeHtml("&#215;"));
            break;
        case str.includes(decodeHtml("&#8722;")):
            console.log(str, decodeHtml("&#8722;"));
            break;
        case str.includes(decodeHtml("&#43;")):
            console.log(str, decodeHtml("&#43;"));
            break;
        case str.includes(decodeHtml("&#61;")):
            console.log(str, decodeHtml("&#61;"));
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
    const calculate = canBeEvaluated(screen.innerHTML);
    inputToScreen(value);

    if(calculate) evaluate(screen.innerHTML);
}

var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('button');

buttons.forEach(
    button => {button.addEventListener('click', handleButton)}
);