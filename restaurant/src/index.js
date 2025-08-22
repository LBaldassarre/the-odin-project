import "./style.css";
import Header from "./header/header.js";
import NavItem from "./header/navItem.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js"

const root = document.querySelector('#root');

root.innerHTML += Header.headerHTML;
root.innerHTML += Main.mainHTML(NavItem.switch);
root.innerHTML += Footer.footerHTML;

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

function pageSwitch (e) {
    const id = e.srcElement.id
    const switchState = id.substring(3);
    NavItem.switch = switchState;

    if (document.getElementsByClassName('main').length > 0) {
        main.innerHTML = Main.mainHTML(NavItem.switch);
    }
}

const navItems = document.querySelectorAll(".header-nav-ul-li");

navItems.forEach(item => item.addEventListener('click', pageSwitch));