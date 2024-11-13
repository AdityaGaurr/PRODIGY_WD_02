
let timer;
let isRunning = false;
let startTime, elapsedTime = 0;
let lapCounter = 0;

// Format time in hh:mm:ss
function formatTime(time) {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    return (
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0')
    );
}

// Start button functionality
document.getElementById('startBtn').addEventListener('click', function() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('display').innerText = formatTime(elapsedTime);
        }, 1000);
    }
});

// Pause button functionality
document.getElementById('pauseBtn').addEventListener('click', function() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', function() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById('display').innerText = '00:00:00';
    document.getElementById('laps').innerHTML = '';
    lapCounter = 0;
});

// Lap button functionality
document.getElementById('lapBtn').addEventListener('click', function() {
    if (isRunning) {
        lapCounter++;
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapItem);
    }
});
