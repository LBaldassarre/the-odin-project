import "./mainPane.css";

class MainPane {

    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('main-pane-container');
        this.element.textContent = "Main Pane";

    }

    render () {
        return this.element;
    }

}

export default MainPane;