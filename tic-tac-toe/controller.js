import GameBoardFactory from "./gameBoardFactory.js";
import playerFactory from "./playerFactory.js";

const controller = function () {

    let id_list = [];
    
    const createMatch = function (p1Name, p1Icon, p2Name, p2Icon) {
        
        const id = id_list.length === 0 ? 0 : id_list[id_list.length - 1] + 1;

        const gameBoard = GameBoardFactory.createGameBoard();
        const player1 = playerFactory.createPlayer(p1Name, p1Icon);
        const player2 = playerFactory.createPlayer(p2Name, p2Icon);

        const playerMove = function(playerName, playerIcon, moveCount) {
            console.log(`${playerName} Turns`);

                    let row = prompt('row: ');
                    while (row > 2 || row == "") {
                        row = prompt('Out of Range, chose again: ');
                    };

                    let col = prompt('col: ');
                    while (col > 2 || col == "") {
                        col = prompt('Out of Range, chose again: ');
                    };


                    gameBoard.updateGameBoard(playerName, playerIcon, row, col);
                    gameBoard.showGameBoard();

                    if (moveCount >= 5) {

                        prompt('MoveCount >= 5');

                        winnerCheck(row, col, gameBoard, playerIcon, playerName);

                    }
        }

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

            prompt('Second Search');

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
                prompt('Second Search Loop');
                console.log(dirCheck);
                prompt('Execute dirCheck');
                const cellCheck = dirCheck(row, col, gameBoard, playerIcon).check;
                const direction = dirCheck;
                const second_row = dirCheck(row, col, gameBoard, playerIcon).row;
                const second_col = dirCheck(row, col, gameBoard, playerIcon).col;
                if (cellCheck) {
                    console.log(direction, second_row, second_col);
                    prompt('Second Search Done');
                    return {
                        direction,
                        second_row,
                        second_col 
                    }
                };
            };

        };
        
        const winnerCheck = function (row, col, gameBoard, playerIcon, playerName) {

             prompt('Start Winner Check');

            const secondIconSearch = searchSecondIcon(row, col, gameBoard, playerIcon);
            const direction = secondIconSearch.direction;
            const third_row = secondIconSearch.second_row;
            const third_col = secondIconSearch.second_col;

            if (direction(third_row, third_col, gameBoard, playerIcon).check) {
                console.log(`${playerName} Won!!`);
            }            

        };
        
        const startMatch = function () {

            let moveCount = 0;

            while (moveCount < 6) {

                moveCount ++;

                if (moveCount % 2 === 1) {

                    playerMove(p1Name, p1Icon, moveCount);

                } else {

                    playerMove(p2Name, p2Icon, moveCount);

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

