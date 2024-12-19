/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.full__screen');

let mouseDownRange = false;
let mouseDownScrub = false;

let isFullScreen = false;
const style = getComputedStyle(player);
const maxWidth = style.maxWidth;

/* Build out functions */
function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip() {
    if(!mouseDownRange) return
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function openFullscreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } 
  }

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousedown', () => mouseDownRange = true));
ranges.forEach(range => range.addEventListener('mouseup', () => mouseDownRange = false));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouseDownScrub && scrub(e));
progress.addEventListener('mousedown', () => mouseDownScrub = true);
progress.addEventListener('mouseup', () => mouseDownScrub = false);
progress.addEventListener('mouseout', () => mouseDownScrub = false);

fullScreen.addEventListener('click', openFullscreen);