let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    // clear any existing timers
    clearInterval(countDown);

    const now = Date.now();
    const then = now + seconds * 1000;
    dsiplayTimeLeft(seconds);
    dsiplayEndTime(then);

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if(secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
        // dsiplay it
        dsiplayTimeLeft(secondsLeft);
    }, 1000);
}

function dsiplayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const dsiplay = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = dsiplay;
    document.title = dsiplay;
}

function dsiplayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hour = end.getHours() > 12 ? end.getHours() - 12 : end.getHours();
    const minutes = end.getMinutes();
    const pm_am = end.getHours() > 12 ? '(PM)' : '(AM)';

    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}${pm_am}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})