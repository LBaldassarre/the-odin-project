import GameBoardFactory from "./gameBoardFactory.js";
import playerFactory from "./playerFactory.js";

const gameBoardTest = GameBoardFactory.createGameBoard();

GameBoardFactory.showAll();
gameBoardTest.showGameBoardId();
gameBoardTest.showGameBoard();

const player1 = playerFactory.createPlayer('Player1', 'X');
player1.showAll();
