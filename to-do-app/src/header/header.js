import "./header.css";
import NavItem from "./navItem.js";

// class Header {
//     static HTML = `
//         <div class='header'> 
//             <div class='logo'>Super-To-Do</div>
//             <div class='nav'>
//                 <ul>
//                     ${NavItem.HTML('Calendar')}
//                     ${NavItem.HTML('Board')}
//                     ${NavItem.HTML('Timeline')}
//                 </ul>
//             </div>
//             <div class='settings'>
//                 <ul>
//                     <li>S</li>
//                     <li>U</li>
//                 </ul>
//             </div>
//         <div>
//     `
// }

export class Header {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("header");

    // logo
    this.logo = document.createElement("div");
    this.logo.classList.add("logo");
    this.logo.textContent = "Super-To-Do";

    // nav
    this.nav = document.createElement("div");
    this.nav.classList.add("nav");
    this.nav_ul = document.createElement("ul");
    this.nav.appendChild(this.nav_ul);

    const navItems = ["Calendar", "Board", "Timeline"];
    navItems.forEach(label => {
    const navItem = new NavItem(label);
    this.nav_ul.appendChild(navItem.render());
    });

    // settings
    this.settings = document.createElement("div");
    this.settings.classList.add("settings");
    this.settings_ul = document.createElement("ul");
    this.settings.appendChild(this.settings_ul);

    const settingsItems = ["S", "U"];
    settingsItems.forEach(label => {
    const li = document.createElement("li");
    li.textContent = label;
    this.settings_ul.appendChild(li);
    });

    // assemble header
    this.element.appendChild(this.logo);
    this.element.appendChild(this.nav);
    this.element.appendChild(this.settings);
  }

  render() {
    return this.element;
  }
}

export default Header;