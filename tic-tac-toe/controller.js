import GameBoardFactory from "./gameBoardFactory.js";
import playerFactory from "./playerFactory.js";

const controller = function () {

    let id_list = [];
    
    const createMatch = function (p1Name, p1Icon, p2Name, p2Icon) {
        
        const id = id_list.length === 0 ? 0 : id_list[id_list.length - 1] + 1;

        const gameBoard = GameBoardFactory.createGameBoard();
        const player1 = playerFactory.createPlayer(p1Name, p1Icon);
        const player2 = playerFactory.createPlayer(p2Name, p2Icon);
        
        const startMatch = function () {

            let moveCount = 0;

            while (moveCount < 6) {

                if (moveCount % 2 === 0) {

                    console.log(`${p1Name} Turns`);

                    const row = prompt('row: ');
                    const col = prompt('col: ');

                    gameBoard.updateGameBoard(p1Name, p1Icon, row, col);
                    gameBoard.showGameBoard();

                } else {

                    console.log(`${p2Name} Turns`);

                    const row = prompt('row: ');
                    const col = prompt('col: ');

                    gameBoard.updateGameBoard(p2Name, p2Icon, row, col);
                    gameBoard.showGameBoard();

                }

                moveCount ++;

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

