import controller from "./controller.js";

const p1Name = 'Mark';
const p1Icon = 'X';
const p2Name = 'Julia';
const p2Icon = 'O';

const testMatch = controller.createMatch(p1Name, p1Icon, p2Name, p2Icon);

const gameBoardCells = document.querySelectorAll('.cell');

let moveCount = 0;
gameBoardCells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (moveCount % 2 == 0) {
            e.target.innerHTML = 'X';
        } else {
            e.target.innerHTML = 'O';
        }

        moveCount++;
    });
});