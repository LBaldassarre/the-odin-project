import "./sidePane.css";
import { eventBus } from "../../../events/eventBus.js";
import { PROJECTS_BTN_CLICKED } from "../../../events/eventTypes.js";

class SidePane {

    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('side-pane-container');
        this.element.textContent = "Side Pane";

        this.element.addEventListener("click", () => {
              eventBus.publish(PROJECTS_BTN_CLICKED, 'clicked');
            });

    }

    render () {
        return this.element;
    }

}

export default SidePane;