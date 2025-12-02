
const startStopButton = document.getElementById('startStop');
const stopwatchDisplay = document.getElementById('stopwatch');
// const reset = document.getElementById('reset');
let isRunning = false;
let seconds = 0;
let timer;

function formatTime(sec){
    const hrs = String(Math.floor(sec/3600)).padStart(2,'0');
    const mins = String(Math.floor((sec % 3600)/60)).padStart(2,'0');
    const secs = String(sec % 60).padStart(2, '0');

    return `${hrs}:${mins}:${secs}`;
}

function startTimer(){
    timer = setInterval(() => {
        seconds++;
        stopwatchDisplay.textContent = formatTime(seconds);
    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
}

startStopButton.addEventListener('click', () => {
    isRunning = !isRunning;

    if(isRunning){
        startStopButton.textContent = 'Stop';
        startTimer();
    }else{
        startStopButton.textContent = 'Start';
        stopTimer();
    }
});


// Write JavaScript code here