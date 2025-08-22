import "./header.css";
import NavItem from "./navItem.js";

class Header {
    static headerHTML = `
    <div id='header' class='header'>
        <nav class="header-nav">
            <ul class="header-nav-ul">
                ${NavItem.item('Home')}
                ${NavItem.item('Menu')}
                ${NavItem.item('Contact')}
            </ul>
        </nav>
    </div>
    `
};

export default Header;