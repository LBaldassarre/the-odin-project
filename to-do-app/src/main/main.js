import "./main.css";

class Main {
    static get mainObject() {
        return document.querySelector('.main');
    }

    static HTML(state) {
        let HTML = ''
        switch(state){
            case 'calendar':
                 HTML = 
                 `
                    <div class='main'>
                        Calendar
                    </div>
                 `;
                 break;
            case 'board':
                 HTML = 
                 `
                    <div class='main'>
                        Board
                    </div>
                 `;
                 break;
            case 'time-line':
                 HTML = 
                 `
                    <div class='main'>
                        TimeLine
                    </div>
                 `;
                 break;
            default:
                 HTML = 
                 `
                    <div class='main'>
                        InitPage
                    </div>
                 `;
                 break;
        }

        return HTML;
    }
};

export default Main;