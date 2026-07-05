const video = document.querySelector(".player__video");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const rewind = document.querySelector(".rewind");
const forward = document.querySelector(".forward");

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

function handleProgress() {
  const percent = video.duration
    ? (video.currentTime / video.duration) * 100
    : 0;
  progressFilled.style.width = percent + "%";
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function changeVolume() {
  video.volume = this.value;
}

function changeSpeed() {
  video.playbackRate = this.value;
}

function skipVideo() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
volume.addEventListener("input", changeVolume);
playbackSpeed.addEventListener("input", changeSpeed);
rewind.addEventListener("click", skipVideo);
forward.addEventListener("click", skipVideo);