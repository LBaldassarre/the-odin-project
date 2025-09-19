import "./calendar.css"
import SidePane from "./sidePane/sidePane.js";
import MainPane  from "./mainPane/mainPane.js";"./mainPane/mainPane.js"
import { eventBus } from "../../events/eventBus.js";
import { PROJECTS_BTN_CLICKED } from "../../events/eventTypes.js";

class Calendar {
    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('calendar-container');

        this.sidePane = new SidePane();
        this.mainPane = new MainPane();

        this.element.appendChild(this.sidePane.render());
        this.element.appendChild(this.mainPane.render());


        eventBus.subscribe(PROJECTS_BTN_CLICKED, () => {
              if(this.sidePane.element.classList.contains('calendar-side-pane-active')) {
                this.sidePane.element.classList.remove('calendar-side-pane-active');
              } else {
                this.sidePane.element.classList.add('calendar-side-pane-active');
              }

              this.sidePane.render();
            });
    }

    render () {
        return this.element;
    }
}

export default Calendar;