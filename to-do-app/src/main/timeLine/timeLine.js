import "./timeLine.css"

class TimeLine {
    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('timeLine-container');
        this.element.textContent = 'Time Line';
    }

    render () {
        return this.element;
    }
}

export default TimeLine;