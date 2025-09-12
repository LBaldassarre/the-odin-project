import "./main.css";

class Main {

    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('main');
        this.element.textContent = 'Init Page';
    }

    render () {
        return this.element;
    }

}

export default Main;