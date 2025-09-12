import "./calendar.css"

class Calendar {
    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('calendar-container');
        this.element.textContent = 'Calendar';
    }

    render () {
        return this.element;
    }
}

export default Calendar;