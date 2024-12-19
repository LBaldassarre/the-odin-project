function createDrawBoard (colNumber, rowNumber, drawBoard) {
    var boardHTML = '';
    var colCounter = 0;
    while (colCounter < colNumber) {
        colHTML = '<div class="db_col">\n';
        var rowCounter = 0;
        while (rowCounter < rowNumber) {
            if (colCounter == 0 && rowCounter == 0 ) {
                var rowHTML = ' <div class="db_cell db_cell_11"></div>\n';
            } 
            else if (colCounter == 0 && rowCounter == rowNumber - 1) {
                var rowHTML = ' <div class="db_cell db_cell_1rn"></div>\n';
            }
            else if (colCounter == colNumber - 1 && rowCounter == 0 ) {
                var rowHTML = ' <div class="db_cell db_cell_cn1"></div>\n';
            } 
            else if (colCounter == colNumber - 1 && rowCounter == rowNumber - 1) {
                var rowHTML = ' <div class="db_cell db_cell_cnrn"></div>\n';
            }
            else {
                var rowHTML = ' <div class="db_cell"></div>\n';
            }
            
            colHTML += rowHTML;
            rowCounter++;
        }
        colHTML += '</div>\n';
        boardHTML += colHTML;
        colCounter++;
    }
    drawBoard.innerHTML = boardHTML;
}

function clearBoard (cells) {
    cells.forEach(cell => {
        if (cell.className.substring(0, 18) == "db_cell db_cell_11") {
            cell.className = "db_cell db_cell_11";
        }
        else if (cell.className.substring(0, 19) == "db_cell db_cell_1rn") {
            cell.className = "db_cell db_cell_1rn";
        }
        else if (cell.className.substring(0, 19) == "db_cell db_cell_cn1") {
            cell.className = "db_cell db_cell_cn1";
        }
        else if (cell.className.substring(0, 20) == "db_cell db_cell_cnrn") {
            cell.className = "db_cell db_cell_cnrn";
        }
        else {
            cell.className = "db_cell";
        }
    });
}

function startDrawing (event) {
    drawing = true;
    draw(event);
}

function stopDrawing () {
    drawing = false;
}

function draw (event) {
    if (!drawing) return;

    const cell = event.target;
    if (cell.className.substring(0, 18) == "db_cell db_cell_11") {
        cell.className = "db_cell db_cell_11 " + paintColor;
    }
    else if (cell.className.substring(0, 19) == "db_cell db_cell_1rn") {
        cell.className = "db_cell db_cell_1rn " + paintColor;
    }
    else if (cell.className.substring(0, 19) == "db_cell db_cell_cn1") {
        cell.className = "db_cell db_cell_cn1 " + paintColor;
    }
    else if (cell.className.substring(0, 20) == "db_cell db_cell_cnrn") {
        cell.className = "db_cell db_cell_cnrn " + paintColor;
    }
    else {
        cell.className = "db_cell " + paintColor;
    }
}

let drawing = false;
let paintColor = "color11";
let bgColor = "color11";

var drawBoard = document.querySelector('.draw_pane__board');
createDrawBoard (40,40,drawBoard);

var cells = document.querySelectorAll('.db_cell');
var p_colors = document.querySelectorAll('.p_color');
var bg_colors = document.querySelectorAll('.bg_color');
var clearBoardBtn = document.getElementById('clearBoard');
var currentColor = document.getElementById('c_color');
var previousColor = document.getElementById('p_color');

cells.forEach(cell => cell.addEventListener('mousedown', startDrawing));
cells.forEach(cell => cell.addEventListener('mouseover', draw));
cells.forEach(cell => cell.addEventListener('mouseup', stopDrawing));
drawBoard.addEventListener('mouseleave', stopDrawing);

p_colors.forEach(p_color => p_color.addEventListener('click', () => {
    var class_name = p_color.attributes.class.nodeValue;
    var color = class_name.slice(-7);
    previousColor.className = "previous_color_color bg_color " + paintColor;
    paintColor = color;
    currentColor.className = "current_color_color bg_color " + paintColor;
})
);

bg_colors.forEach(bg_color => bg_color.addEventListener('click', () => {
    var class_name = bg_color.attributes.class.nodeValue;
    var color = class_name.slice(-7);
    bgColor = color;
    cells.forEach(cell => cell.className = bgColor + " db_cell")
})
);

currentColor.addEventListener('click', () => {
    var class_name = currentColor.attributes.class.nodeValue;
    var color = class_name.slice(-7);
    paintColor = color;
})

previousColor.addEventListener('click', () => {
    var class_name = previousColor.attributes.class.nodeValue;
    var color = class_name.slice(-7);
    paintColor = color;
})

clearBoardBtn.addEventListener('click', () => clearBoard(cells));

