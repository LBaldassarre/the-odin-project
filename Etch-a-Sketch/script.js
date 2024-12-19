function createDrawBoard (colNumber, rowNumber, drawBoard) {
    var boardHTML = '';
    var colCounter = 0;
    while (colCounter < colNumber) {
        colHTML = '<div class="db_col">\n';
        var rowCounter = 0;
        while (rowCounter < rowNumber) {
            var rowHTML = ' <div class="db_cell"></div>\n';
            colHTML += rowHTML;
            rowCounter++;
        }
        colHTML += '</div>\n';
        boardHTML += colHTML;
        colCounter++;
    }
    drawBoard.innerHTML = boardHTML;
}

var paintColor = "black";

var drawBoard = document.querySelector('.draw_pane__board');
createDrawBoard (16,16,drawBoard);

var cells = document.querySelectorAll('.db_cell');
var p_colors = document.querySelectorAll('.p_color'); 


cells.forEach(cell => cell.addEventListener('click', () => {
    // cell.style.backgroundColor = "black"
    cell.className = paintColor + ' db_cell';
    console.log(cell.className);
})
);

p_colors.forEach(p_color => p_color.addEventListener('click', () => {
    var class_name = p_color.attributes.class.nodeValue;
    var color = class_name.slice(-7);
    paintColor = color;
})
);

