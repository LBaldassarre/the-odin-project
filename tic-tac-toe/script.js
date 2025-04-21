const GameBoardFactory = function () {
    let history = [];
    let id_list = [];
    let gameBoardsCreated = 0;

    const showHistory = () => {console.log(history)};
    const showIds = () => {console.log(id_list)};
    const showGameBoardsCreated = () => {console.log(gameBoardsCreated)};
    const showAll = () => {
        showHistory();
        showIds();
        showGameBoardsCreated();
    }

    const appendHistory = (gameBoard) => {history.push(gameBoard)};

    const createGameBoard = function () {
        const gameBoardId = id_list.length === 0 ? 1 : id_list[id_list.length - 1] + 1;
        gameBoardsCreated ++;
        id_list = [...id_list, gameBoardId];
        let moves = [];

        let board = [
            [[' '], [' '], [' ']],
            [[' '], [' '], [' ']],
            [[' '], [' '], [' ']]
        ];

        const showGameBoard = () => {
            const boardImage = `
                 ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
                ---|---|---
                 ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
                ---|---|---
                 ${board[2][0]} | ${board[2][1]} | ${board[2][2]}
            `;
            console.log(boardImage);
        };
        const showGameBoardId = () => {console.log(gameBoardId)};
        const extractGameBoardId = () => {return gameBoardId};
        const updateMoves = (move) => [...moves, move];
        const updateGameBoard = function (player, mark, row, col) {
            const move = { player, mark, row, col };
            board[row[col]] = mark;
            updateMoves(move);
        };


        return {
            extractGameBoardId,
            showGameBoardId,
            showGameBoard,
            updateGameBoard,
        };
    }

    return {
        showHistory,
        showIds,
        showGameBoardsCreated,
        showAll,
        appendHistory,
        createGameBoard
    }
}()


const gameBoardTest = GameBoardFactory.createGameBoard();
const gameBoardTest2 = GameBoardFactory.createGameBoard();
const gameBoardTest3 = GameBoardFactory.createGameBoard();

GameBoardFactory.showAll();
gameBoardTest.showGameBoardId();
gameBoardTest.showGameBoard();

