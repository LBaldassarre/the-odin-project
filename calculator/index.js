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

function handleButton (event) {
    const value = this.attributes.data.value;
        if (value !== "backspace") {

            if (value !== "clear") {
                screen.innerHTML === "0" ? screen.innerHTML = value : screen.innerHTML += value;
            } else {
                screen.innerHTML = "0";
            }
            
        } else {
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        }
}

var screen = document.querySelector('.screen');
var buttons = document.querySelectorAll('button');

buttons.forEach(
    button => {button.addEventListener('click', handleButton)}
);