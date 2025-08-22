import "./main.css";

class Main {
    capitalize(String) {
        return String(s[0]).toUpperCase() + String(s).slice(1);
    }

    static mainHTML(switchState) {
        let HTML = '';

        switch(switchState) {
            case 'home':
                HTML = `
                    <div id='main' class='main'>
                        You are on the Home page
                    </div>
                `;
                break;

            case 'menu':
                HTML = `
                    <div id='main' class='main'>
                        You are on the Menue page
                    </div>
                `;
                break;

            case 'contact':
                HTML = `
                    <div id='main' class='main'>
                        You are on the Contact page
                    </div>
                `;
                break;
        }
        
        return HTML;
    } 
}


export default Main;