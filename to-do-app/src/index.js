import "./index.css";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js"

const root = document.querySelector('#root');

root.innerHTML += Header.headerHTML;
root.innerHTML += Main.mainHTML(NavItem.switch);
root.innerHTML += Footer.footerHTML;

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
