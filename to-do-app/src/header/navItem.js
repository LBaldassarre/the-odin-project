import "./navItem.css"
import { eventBus } from "../events/eventBus.js";
import { NAV_ITEM_CLICKED } from "../events/eventTypes.js";

export class NavItem {
  constructor(label) {
    this.label = label;

    this.element = document.createElement("li");
    this.element.classList.add("nav-item");
    this.element.textContent = label;
    // ✅ attach listener to the <button>
    this.element.addEventListener("click", () => {
      eventBus.publish(NAV_ITEM_CLICKED, this.label);
    });
  }

  render() {
    return this.element;
  }
}

export default NavItem;