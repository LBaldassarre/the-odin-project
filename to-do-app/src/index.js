import "./index.css";
import Header from "./header/header.js";
import Main from "./main/main.js";
import Footer from "./footer/footer.js"

const root = document.querySelector('#root');

root.innerHTML += Header.HTML;
root.innerHTML += Main.HTML;
root.innerHTML += Footer.HTML;

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
