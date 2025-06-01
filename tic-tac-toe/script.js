import controller from "./controller.js";
import gameBoardFactory from "./gameBoardFactory.js";
import updateHTML from "./updateHTML.js";

let p1Name;
let p2Name;
const p1Icon = 'X';
const p2Icon = 'O';

const start_reset_btn = document.querySelector('.start-reset-btn');
const p1NameInput = document.querySelector('.player-1-name');
const p2NameInput = document.querySelector('.player-2-name');

start_reset_btn.addEventListener('click', () => {
    const gameBoardCells = document.querySelectorAll('.cell');

    updateHTML.clearGameBoard(gameBoardCells);

    p1NameInput.value ? p1Name = p1NameInput.value : p1Name = 'Player 1';
    p2NameInput.value ? p2Name = p2NameInput.value : p2Name = 'Player 2';
    
    const newMatch = controller.createMatch(p1Name, p1Icon, p2Name, p2Icon, gameBoardCells);
    newMatch.startMatch();

    if (start_reset_btn.innerHTML == 'Start') {
        start_reset_btn.innerHTML = 'Restart'
    }
})



