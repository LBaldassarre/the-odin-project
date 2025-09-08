import "./header.css";
import NavItem from "./navItem.js";

class Header {
    static HTML = `
        <div class='header'> 
            <div class='logo'>Super-To-Do</div>
            <div class='nav'>
                <ul>
                    ${NavItem.HTML('Calendar')}
                    ${NavItem.HTML('Board')}
                    ${NavItem.HTML('Timeline')}
                </ul>
            </div>
            <div class='settings'>
                <ul>
                    <li>S</li>
                    <li>U</li>
                </ul>
            </div>
        <div>
    `
}

export default Header;