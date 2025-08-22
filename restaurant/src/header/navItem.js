import "./navItem.css";

class NavItem {
    static item(content) {
        const itemHtml =  `
            <li id="li-${content.toLowerCase()}" class="header-nav-ul-li">${content}</li>
        `;
        return itemHtml;
    }

    static switch = 'home';

    get switch () {
        return NavItem.switch;
    }

    set switch (switchState) {
        this._switch = switchState;
    }
};

export default NavItem;