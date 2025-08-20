import "./style.css";

const root = document.querySelector('#root');
const headerHTML = `
    <div id='header' class='header'>
        <h1> This is my header container </h1>
    </div>

    <div id='main' class='main'>
        <div id='left-pane' class='left-pane'>To the Left</div>
        <div id='right-pane' class='right-pane'>To the right</div>
    </div>

    <div id='footer' class='footer'>
        <h1> This is my footer container </h1>
    </div>
    
`;

root.innerHTML = headerHTML;