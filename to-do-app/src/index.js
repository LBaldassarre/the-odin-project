import "./index.css";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js"
import { eventBus } from "./events/eventBus.js";
import { NAV_ITEM_CLICKED } from "./events/eventTypes.js";


const root = document.querySelector('#root');
const header = new Header();
const main = new Main();
const footer = new Footer();


root.appendChild(header.render());
root.appendChild(main.render());
root.appendChild(footer.render());