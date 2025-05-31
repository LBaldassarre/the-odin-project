import GameBoardFactory from "./gameBoardFactory.js";
import playerFactory from "./playerFactory.js";

const controller = function () {

    let id_list = [];


    const createMatch = function (p1Name, p1Icon, p2Name, p2Icon) {
        
        const id = id_list.length === 0 ? 0 : id_list[id_list.length - 1] + 1;

        const gameBoard = GameBoardFactory.createGameBoard();
        const player1 = playerFactory.createPlayer(p1Name, p1Icon);
        const player2 = playerFactory.createPlayer(p2Name, p2Icon);

        let currentCell = null;

        function waitForCellClick() {
            return new Promise((resolve) => {
            currentCell = resolve;
            });
        }

        const gameBoardCells = document.querySelectorAll('.cell');

        const waitForClick = () => {
            return new Promise((resolve) => {
                const handler = (e) => {
                const cell = e.target;
                if (!cell.classList.contains('cell')) return;
                
                const row = parseInt(cell.id[0]);
                const col = parseInt(cell.id[1]);

                if (cell.textContent !== '') return; // prevent overwriting

                // Remove listener after one valid click
                gameBoardCells.forEach(c => c.removeEventListener('click', handler));
                resolve([row, col]);
                };

                gameBoardCells.forEach(cell => {
                cell.addEventListener('click', handler);
                });
            });
        };



        const playerMove = async function(playerName, playerIcon, moveCount) {
            console.log(`${playerName}'s turn`);

            const [row, col] = await waitForClick();

            const cellId = row + '' + col;
            console.log(cellId);

            function checkCell (cell) {
                return cell.id == cellId;
            }

            const gameBoardCellsArray = Array.from(gameBoardCells)

            const cell = gameBoardCellsArray.find(checkCell);

            cell.innerHTML = playerIcon;

            gameBoard.updateGameBoard(playerName, playerIcon, row, col);
            gameBoard.showGameBoard();

            if (moveCount >= 5) {
                console.log('MoveCount >= 5');
                winnerCheck(row, col, gameBoard, playerIcon, playerName);
            }
        };

        function checkUp (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row-1, col) == playerIcon,
                row: row-1,
                col: col
            }
        };
        function checkDown (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row+1, col) == playerIcon,
                row: row+1,
                col: col
            }
        };
        function checkLeft (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row, col-1) == playerIcon,
                row: row,
                col: col-1
            }
        };
        function checkRight (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row, col+1) == playerIcon,
                row: row,
                col: col+1
            }
        };
        function checkUpLeft (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row-1, col-1) == playerIcon,
                row: row-1,
                col: col-1
            }
        };
        function checkUpRight (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row-1, col+1) == playerIcon,
                row: row-1,
                col: col+1
            }
        };
        
        function checkDownLeft (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row+1, col-1) == playerIcon,
                row: row+1,
                col: col-1
            }
        };
        function checkDownRight (row, col, gameBoard, playerIcon) {
            return {
                check: gameBoard.getCell(row+1, col+1) == playerIcon,
                row: row+1,
                col: col+1
            }
        };

        const searchSecondIcon = function (row, col, gameBoard, playerIcon) {

            const direction_list = [
                checkUp, 
                checkDown, 
                checkLeft, 
                checkRight, 
                checkUpLeft, 
                checkUpRight,
                checkDownLeft,
                checkDownRight
            ];

            for (const dirCheck of direction_list) {
                console.log(dirCheck);
                const cellCheck = dirCheck(row, col, gameBoard, playerIcon).check;
                const direction = dirCheck;
                const second_row = dirCheck(row, col, gameBoard, playerIcon).row;
                const second_col = dirCheck(row, col, gameBoard, playerIcon).col;
                if (cellCheck) {
                    console.log(direction, second_row, second_col);
                    return {
                        direction,
                        second_row,
                        second_col 
                    }
                };
            };

        };
        
        const winnerCheck = function (row, col, gameBoard, playerIcon, playerName) {

            const secondIconSearch = searchSecondIcon(row, col, gameBoard, playerIcon);
            const direction = secondIconSearch.direction;
            const third_row = secondIconSearch.second_row;
            const third_col = secondIconSearch.second_col;

            if (direction(third_row, third_col, gameBoard, playerIcon).check) {
                console.log(`${playerName} Won!!`);
            }            

        };
        
        const startMatch = async function () {

            let moveCount = 0;

            while (moveCount < 6) {

                moveCount ++;
                currentCell = null;

                if (moveCount % 2 === 1) {


                    await playerMove(p1Name, p1Icon, moveCount);

                } else {

                    await playerMove(p2Name, p2Icon, moveCount);

                }


            }

        }

        return {
            startMatch
        }

    };

    return {
        createMatch
    }
}

export default new controller;

