import GameBoardFactory from "./gameBoardFactory.js";
import playerFactory from "./playerFactory.js";
import updateHTML from "./updateHTML.js";

const controller = function () {

    let id_list = [];


    const createMatch = function (p1Name, p1Icon, p2Name, p2Icon, gameBoardCells) {

        let restart = false;
        
        const id = id_list.length === 0 ? 0 : id_list[id_list.length - 1] + 1;

        const gameBoard = GameBoardFactory.createGameBoard();

        const gameBoardCellsArray = Array.from(gameBoardCells);

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

        async function playerMove (playerName, playerIcon, moveCount) {
            console.log(`${playerName}'s turn`);
            console.log(moveCount);

            const [row, col] = await waitForClick();

            if (row == 9 && col == 9) {return};

            updateHTML.updatePlayerChoice(gameBoardCellsArray, row, col, playerIcon);

            gameBoard.updateGameBoard(playerName, playerIcon, row, col);

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
            console.log(secondIconSearch);
            const direction = secondIconSearch.direction;
            const third_row = secondIconSearch.second_row;
            const third_col = secondIconSearch.second_col;

            if (direction(third_row, third_col, gameBoard, playerIcon).check) {
                console.log(`${playerName} Won!!`);
            }            

        };
        
        const startMatch = async function () {
            let moveCount = 0;
            while (!restart && moveCount < 6) {
                moveCount ++;
                if (moveCount % 2 === 1) {
                    await playerMove(p1Name, p1Icon, moveCount);
                } else {
                    await playerMove(p2Name, p2Icon, moveCount);
                }
            }
        }

        const stopMatch = function () {
            restart = true;
            gameBoardCellsArray[9].click();
            gameBoardCells.forEach(cell => cell.cloneNode(true));
        }

        return {
            startMatch,
            stopMatch
        }

    };

    return {
        createMatch
    }
}

export default new controller;

