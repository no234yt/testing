const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const declineButton = document.getElementById("decline-button"); 
const acceptButton = document.getElementById("accept-button"); 
const header = document.querySelector(".header"); 

// controlla se l'utente ha cliccato sull'accept button
let hasClicked;

// Funzione chiamata prima che la pagina venga chiusa
window.onbeforeunload = function() {
    if (hasClicked) return true;
};

// Funzione per il decline button
function declineButtonClick(event) {
    event.preventDefault();

    // imposta la variabile "hasClicked" su true
    if (!hasClicked) hasClicked = true;

    // Nasconde l'overlay
    overlay.hidden = true;

    // Avvia il jumpscare
    video.play();

    // Chiama la funzione videoClick per attivare l'F11
    videoClick();

    // Aggiunge hidden alla header bar per nasconderla (contest.html)
    header.classList.add("hidden");
}

// Funzione chiamata quando si clicca sul pulsante di accettazione
function acceptButtonClick(event) {
    event.preventDefault();

    // imposta la variabile "hasClicked" su true
    if (!hasClicked) hasClicked = true;

    // Nasconde l'overlay
    overlay.hidden = true;

    // Avvia il jumpscare
    video.play();

    // Chiama la funzione videoClick per attivare l'F11
    videoClick();

    // Aggiunge hidden alla header bar per nasconderla (contest.html)
    header.classList.add("hidden");
}

// Funzione chiamata quando si clicca sul video
function videoClick(event) {
    // Impedisce l'azione predefinita del clic
    if (event) event.preventDefault();
    // Se la pagina non è già in modalità a schermo intero, richiede la modalità a schermo intero
    const { documentElement } = document;
    if (documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if (documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if (documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if (documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
}

// Aggiunge gli event listener ai pulsanti
acceptButton.addEventListener("click", acceptButtonClick);
declineButton.addEventListener("click", declineButtonClick);