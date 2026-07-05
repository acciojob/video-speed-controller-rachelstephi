const video = document.querySelector("video");
const toggle = document.querySelector(".player__button");
const progressFilled = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");
const inputs = document.querySelectorAll(".controls input");
const skipButtons = document.querySelectorAll("[data-skip]");

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    toggle.textContent = video.paused ? "►" : "❚ ❚";
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = percent + "%";
}

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function handleUpdate() {
    if (this.classList.contains("volume")) {
        video.volume = this.value;
    }

    if (this.classList.contains("playbackSpeed")) {
        video.playbackRate = this.value;
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgress);

progress.addEventListener("click", scrub);

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

skipButtons.forEach(button => button.addEventListener("click", skip));
