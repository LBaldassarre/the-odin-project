function createDrawBoard (colNumber, rowNumber, drawBoard) {
    var boardHTML = '';
    var colCounter = 0;
    while (colCounter < colNumber) {
        colHTML = '<div class="db_col">\n';
        var rowCounter = 0;
        while (rowCounter < rowNumber) {
            var rowHTML = ' <div class="db_row"></div>\n';
            colHTML += rowHTML;
            rowCounter++;
        }
        colHTML += '</div>\n';
        boardHTML += colHTML;
        colCounter++;
    }
    drawBoard.innerHTML = boardHTML;
}

var drawBoard = document.querySelector('.draw_pane__board');

createDrawBoard (16,16,drawBoard);