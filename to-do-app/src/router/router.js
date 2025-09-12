import { eventBus } from "../events/eventBus.js";
import { NAV_ITEM_CLICKED } from "../events/eventTypes.js";
import Calendar from "../main/calendar.js";
import Board from "../main/board.js";
import Timeline from "../main/timeLine.js";

class Router {
  constructor(mainElement) {
    this.mainElement = mainElement;

    this.routes = {
      Calendar: Calendar,
      Board: Board,
      Timeline: Timeline,
    };

    eventBus.subscribe(NAV_ITEM_CLICKED, (page) => {
      this.navigate(page);
    });
  }

  navigate(page) {
    this.mainElement.replaceChildren();;

    if (this.routes[page]) {
      const Component = this.routes[page];
      const comp = new Component();
      this.mainElement.appendChild(comp.render());
    } else {
      this.mainElement.textContent = "404 - Page not found";
    }
  }
}

export default Router;