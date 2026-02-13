// yes-script.js

// Function to toggle the music on the yes page
let isMusicPlaying = false;

function toggleMusic() {
    const audio = document.getElementById('background-music');
    if (isMusicPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isMusicPlaying = !isMusicPlaying;
}

// Function to handle confetti animation
function startConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confettiContainer.appendChild(confetti);

    // Add animation here (CSS or JS)
}

// Event listeners for buttons
document.getElementById('music-toggle').addEventListener('click', toggleMusic);
document.getElementById('confetti-button').addEventListener('click', startConfetti);