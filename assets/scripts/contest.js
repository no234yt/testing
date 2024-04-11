const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");
const header = document.querySelector(".header"); // Seleziona la headerbar

let hasClicked;

window.onbeforeunload = function() {
    if (hasClicked) return true;
};

function declineButtonClick(event) {
    event.preventDefault();
    window.open("https://www.bing.com/images/search?q=gatti&FORM=HDRSC3", "_blank");
}

function acceptButtonClick(event) {
    event.preventDefault();
    if (!hasClicked) hasClicked = true;
    overlay.hidden = true;
    video.play();
    videoClick();
    header.classList.add("hidden"); // Aggiungi la classe per nascondere la headerbar
}

function videoClick(event) {
    if (event) event.preventDefault();
    // if not fullscreen
    const { documentElement } = document;
    if (documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if (documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
}

acceptButton.addEventListener("click", acceptButtonClick);
declineButton.addEventListener("click", declineButtonClick);
