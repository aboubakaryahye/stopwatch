let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

// Start Timer
document.getElementById('start-timer').addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);  // Clears the existing interval
    }
    int = setInterval(displayTimer, 10);  // Start new interval to update every 10ms
    alert("Timer Started!");  // Alert when the timer starts
});

// Pause Timer
document.getElementById('pause-timer').addEventListener("click", () => {
    clearInterval(int);  // Pause the timer
    alert("Timer Paused!");  // Alert when the timer pauses
});

// Reset Timer
document.getElementById('reset-timer').addEventListener("click", () => {
    clearInterval(int);  // Pause the timer
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];  // Reset time values
    timeRef.innerHTML = "00 : 00 : 00 : 000";  // Reset display
    alert("Timer Reset!");  // Alert when the timer resets
});

// Timer Display Function
function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {  // If milliseconds reach 1000, reset and increment seconds
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {  // If seconds reach 60, reset and increment minutes
            seconds = 0;
            minutes++;
            if (minutes === 60) {  // If minutes reach 60, reset and increment hours
                minutes = 0;
                hours++;
            }
        }
    }

    // Format the time components
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds :
             milliseconds < 100 ? "0" + milliseconds : milliseconds;

    // Display the formatted time
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
