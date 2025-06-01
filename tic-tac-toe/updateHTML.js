const updateHTML = function () {
    
    const updatePlayerChoice = function (gameBoardCellsArray, row, col, playerIcon) {
        const cellId = row + '' + col;
            console.log(cellId);

            function checkCell (cell) {
                return cell.id == cellId;
            }

            const cell = gameBoardCellsArray.find(checkCell);

            cell.innerHTML = playerIcon;
    }

    const clearGameBoard = function (gameBoardCells) {
        gameBoardCells.forEach(cell => {
            cell.innerHTML = '';
        })
    }

    return {
        updatePlayerChoice,
        clearGameBoard
    }

    

}

export default new updateHTML;