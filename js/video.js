
const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('.viewer');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranger = player.querySelectorAll('.player__slider');
const progressBar = player.querySelector('.progress__filled');
const progress = player.querySelector('.progress')

toggle.addEventListener('click', onTogglePlay);
video.addEventListener('click', onTogglePlay);
video.addEventListener("play", updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', onProgress);



function onTogglePlay(evt) {
    const method = video.paused ? "play" : 'pause';
    video[method]();

}

function updateButton() {
    const icon = this.paused ? '▶' : '❚ ❚';
    toggle.textContent = icon;
}


skipButtons.forEach(btn => btn.addEventListener("click", onSkipClick));

function onSkipClick() {
    video.currentTime += Number(this.dataset.skip);
}

ranger.forEach(input => input.addEventListener("input", handleChangeUpdate));

function handleChangeUpdate() {
    video[this.name] = this.value;
}

function onProgress() {
    const persent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${persent}%`;

}

let mouseDown = false;

progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mousemove', (evt) => mouseDown && scrub(evt));
progress.addEventListener('click', scrub);

function scrub(evt) {
    const scrubTime = (evt.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log('evt.offsetX', evt.offsetX);
    console.log('progress.offsetWidth', progress.offsetWidth);
    console.log('video.duration', video.duration);
}