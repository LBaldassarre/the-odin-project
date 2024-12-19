// Game functions
function getComputerChoice() {
    let choices = [0, 1, 2];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

function playRound(playerChoice, computerChoice) {
    const playerChoiceUpper = playerChoice.toUpperCase();
    const computerChoiceUpper = computerChoice.toUpperCase();
    
    let alert = ""

    // When the user wins, result = 1, when the computer wins result = 2, else result = 0
    let result = 0

    switch (true) {

        case (playerChoiceUpper === "ROCK" && computerChoiceUpper === "PAPER") :
            alert = "You Lose the round! Paper beats Rock";
            result = 2;
            break;
        
        case (playerChoiceUpper === "ROCK" && computerChoiceUpper === "SCISSORS") :
            alert = "You Win the round! Rock beats Scisors";
            result = 1;
            break;
        
        case (playerChoiceUpper === "PAPER" && computerChoiceUpper === "ROCK") :
            alert = "You Win the round! Paper beats Rock";
            result = 1;
            break;

        case (playerChoiceUpper === "PAPER" && computerChoiceUpper === "SCISSORS") :
            alert = "You Lose the round! Scisors beats Paper";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISSORS" && computerChoiceUpper === "ROCK") :
            alert = "You Lose the round! Rock beats Scisors";
            result = 2;
            break;

        case (playerChoiceUpper === "SCISSORS" && computerChoiceUpper === "PAPER") :
            alert = "You Win the round! Scisors beats Paper";
            result = 1;
            break;
        
        default:
            alert = "Thats a Tie!"
            result = 0;
            break;
    }

    console.log(alert)

    return result
}

// Get all elements needed
const result_text = document.querySelector('.round__result-text');
const result_next = document.querySelector('.round__result-next');
const npc_score = document.querySelector('.points_npc');
const pc_score = document.querySelector('.points_pc');
const rps_npc = document.querySelectorAll('.option_npc');
const rps_pc = document.querySelectorAll('.option_pc');
const pc_options_div = document.querySelector('.round__pc');
const round_block = document.querySelector('.round_block');
const game_log_text = document.querySelector('.game_log__text');
const left_pane = document.querySelector('.left_pane');
const game_block = document.querySelector('.game_block');
const game_end_message = document.querySelector('.message');
const game_end_button = document.querySelector('.refresh_button');

// Initializing round and game block at inactive state
round_block.style.position = 'fixed';
round_block.style.top = '0';
round_block.style.left = '0';
round_block.style.width = '0';
round_block.style.height = '0';
round_block.style.zIndex = '999991';

game_block.style.position = 'fixed';
game_block.style.top = '0';
game_block.style.left = '0';
game_block.style.width = '0';
game_block.style.height = '0';
game_block.style.zIndex = '999992';
game_block.style.display = 'none';

// Starting global variables
let game_log_HTML = game_log_text.innerHTML;
let game_log_scrollTop = 0;
let round = 0;
let npc_points = 0;
let pc_points = 0;
let points_to_win = 5;

// Result next action
result_next.addEventListener('click', () => {
    let choices = [0, 1, 2];
    for (i in choices) {
        rps_npc[i].classList.remove('lose');
        rps_npc[i].classList.remove('win');
        rps_npc[i].classList.remove('tie');
    }
    for (i in choices) {
        rps_pc[i].classList.remove('lose');
        rps_pc[i].classList.remove('win');
        rps_pc[i].classList.remove('tie');
    }

    // Removing round_block
    round_block.style.position = 'fixed';
    round_block.style.top = '0';
    round_block.style.left = '0';
    round_block.style.width = '0';
    round_block.style.height = '0';
    round_block.style.zIndex = '999991';
})

// Play round base on user click
rps_pc.forEach(pc_op => 
    pc_op.addEventListener('click', () => {

        // Get choices and play round
        const ran_npc_choice = getComputerChoice();
        const npc_choice = rps_npc[ran_npc_choice].dataset.key;
        const pc_choice = pc_op.dataset.key;
        result = playRound(pc_choice, npc_choice);
        round += 1;

        // Change chocie background based on the result
        if (result == 1) {
            pc_op.classList.add('win');
            rps_npc[ran_npc_choice].classList.add('lose');
            result_text.innerHTML = 'You Won!'
            pc_points += 1;
            pc_score.innerHTML = pc_points;
            game_log_HTML +=  `<br> Round: ${round} <br>
            ${pc_choice.toUpperCase()} > ${npc_choice.toUpperCase()} <br>
            You Won! <br>`;
            game_log_scrollTop += 100;
        }
        else if (result == 2) {
            pc_op.classList.add('lose');
            rps_npc[ran_npc_choice].classList.add('win');
            result_text.innerHTML = 'You Lost'
            npc_points += 1;
            npc_score.innerHTML = npc_points;
            game_log_HTML += `<br> Round: ${round} <br>
            ${pc_choice.toUpperCase()} < ${npc_choice.toUpperCase()} <br>
            You Lost <br>`;
            game_log_scrollTop += 100;
        }
        else {
            pc_op.classList.add('tie');
            rps_npc[ran_npc_choice].classList.add('tie');
            result_text.innerHTML = 'That\'s a Tie'
            game_log_HTML +=  `<br> Round: ${round} <br>
            ${pc_choice.toUpperCase()} = ${npc_choice.toUpperCase()} <br>
            That\'s a Tie <br>`;
            game_log_scrollTop += 100;
        }

        game_log_text.innerHTML = game_log_HTML;
        game_log_text.scrollTop = game_log_scrollTop;

        // Check for game end
        if (pc_points == points_to_win) {
            // Update game log
            game_log_HTML +=  `<br> Congratulations you won the match! <br>
            ${pc_points} - ${npc_points} <br>`;
            game_log_scrollTop += 100;
            game_log_text.innerHTML = game_log_HTML;
            game_log_text.scrollTop = game_log_scrollTop;

            // Block game
            let game_block_y = left_pane.offsetTop;
            let game_block_x = left_pane.offsetLeft;
            let game_block_height = left_pane.clientHeight;
            let game_block_width = left_pane.clientWidth;

            game_end_message.innerHTML = 'Congratulations you won the match! <br> If you want to play again click the refresh button bellow <br>'
            game_block.style.position = 'fixed';
            game_block.style.top = `${game_block_y}px`;
            game_block.style.left = `${game_block_x}px`;
            game_block.style.height = `${game_block_height}px`;
            game_block.style.width = `${game_block_width}px`;
            game_block.style.zIndex = '0';
            game_block.style.display = 'flex';
        }
        else if (npc_points == points_to_win) {
            // Update game log
            game_log_HTML +=  `<br> Bad news, you lost <br>
            ${pc_points} - ${npc_points} <br>`;
            game_log_scrollTop += 100;
            game_log_text.innerHTML = game_log_HTML;
            game_log_text.scrollTop = game_log_scrollTop;

            // Block game
            let game_block_y = left_pane.offsetTop;
            let game_block_x = left_pane.offsetLeft;
            let game_block_height = left_pane.clientHeight;
            let game_block_width = left_pane.clientWidth;

            game_end_message.innerHTML = 'Bad news, you lost <br> If you want to play again click the refresh button bellow <br>'
            game_block.style.position = 'fixed';
            game_block.style.top = `${game_block_y}px`;
            game_block.style.left = `${game_block_x}px`;
            game_block.style.height = `${game_block_height}px`;
            game_block.style.width = `${game_block_width}px`;
            game_block.style.zIndex = '0';
            game_block.style.display = 'flex';
        }

        // Blocking user options with the round_block
        let round_block_y = pc_options_div.offsetTop;
        let round_block_x = pc_options_div.offsetLeft;
        let round_block_height = pc_options_div.clientHeight;
        let round_block_width = pc_options_div.clientWidth;

        round_block.style.position = 'fixed';
        round_block.style.top = `${round_block_y}px`;
        round_block.style.left = `${round_block_x}px`;
        round_block.style.height = `${round_block_height}px`;
        round_block.style.width = `${round_block_width}px`;
        round_block.style.zIndex = '0';
    }
    ));