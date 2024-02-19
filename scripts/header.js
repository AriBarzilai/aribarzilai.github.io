document.addEventListener("DOMContentLoaded", function () {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});

// EASTER EGG
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let currentSequence = [];
let discoInterval = null;
let discoActive = false;

function startDiscoMode() {
    if (discoActive) {
        clearInterval(discoInterval);
        document.body.style.backgroundColor = 'white';
        discoActive = !discoActive
    } else {
        discoInterval = setInterval(() => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        }, 500);
        discoActive = !discoActive
    }
    localStorage.setItem('discoActive', discoActive);
}

document.addEventListener('DOMContentLoaded', () => {
    const discoActive = localStorage.getItem('discoActive') === 'true';
    if (discoActive) {
        startDiscoMode();
    }
});

document.addEventListener('keydown', (e) => {
    currentSequence.push(e.key);
    if (currentSequence.length > konamiCode.length) {
        currentSequence.shift();
    }

    if (currentSequence.length === konamiCode.length && konamiCode.every((val, index) => val === currentSequence[index])) {
        startDiscoMode();
        currentSequence = []; // Reset the sequence to prevent immediate re-triggering
    }
});


