import { eventBus } from "../events/eventBus.js";
import { NAV_ITEM_CLICKED } from "../events/eventTypes.js";
import Daily from "../main/daily/daily.js";
import Weekly from "../main/weekly/weekly.js";
import Monthly from "../main/monthly/monthly.js";

class Router {
  constructor(mainElement) {
    this.mainElement = mainElement;

    this.routes = {
      Daily: Daily,
      Weekly: Weekly,
      Monthly: Monthly,
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