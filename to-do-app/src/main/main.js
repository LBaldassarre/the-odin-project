import "./main.css";
import { eventBus } from "../events/eventBus.js";
import { NAV_ITEM_CLICKED } from "../events/eventTypes.js";

class Main {

    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('main');
        this.element.textContent = 'Init Page';

        eventBus.subscribe(NAV_ITEM_CLICKED, (label) => {
          this.element.textContent = label;
        });
    }

    render () {
        return this.element;
    }

}

export default Main;