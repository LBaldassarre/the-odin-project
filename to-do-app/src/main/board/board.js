import "./board.css"

class Board {
    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('board-container');
        this.element.textContent = 'Board';
    }

    render () {
        return this.element;
    }
}

export default Board;