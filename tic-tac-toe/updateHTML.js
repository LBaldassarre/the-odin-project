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

    return {
        updatePlayerChoice
    }

}

export default new updateHTML;