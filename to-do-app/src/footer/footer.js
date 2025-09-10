import "./footer.css"

class Footer {
    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('footer');
        this.element.textContent = 'Design and Developed by Lucas Baldassarre - All Rights Reserved';
    }

    render () {
        return this.element;
    }
}

export default Footer;