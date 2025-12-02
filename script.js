
const startStopButton = document.getElementById('startStop');
// const reset = document.getElementById('reset');
let isRunning = false;
startStopButton.addEventListener('click', () => {
    isRunning = !isRunning;

    if(isRunning){
        startStopButton.textContent = 'Stop';
    }else{
        startStopButton.textContent = 'Start';
    }
});


// Write JavaScript code here