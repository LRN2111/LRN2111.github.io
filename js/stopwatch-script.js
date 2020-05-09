// declaring variables needed for project
var displayEl = document.getElementById("display");
var startEl = document.getElementById("start-button");
var stopEl = document.getElementById("stop-button");
var resetEl = document.getElementById("reset-button");
var total = 0;
var secondsTens = 0;
var secondsOnes = 0;
var minutesTens = 0;
var minutesOnes = 0;
var hoursTens = 0;
var hoursOnes = 0;
var isTimerActive = false;
var text = "";
var t;

// function to convert total seconds 'total' into formatted time HH:MM:SS
var format = function (x) {
    hoursTens = Math.floor(x / 36000);
    hoursOnes = Math.floor((x % 36000) / 3600);
    minutesTens = Math.floor((x - hoursTens * 36000 - hoursOnes * 3600) / 600);
    minutesOnes = Math.floor(((x - hoursTens * 36000 - hoursOnes * 3600) % 600) / 60);
    secondsTens = Math.floor((x - hoursTens * 36000 - hoursOnes * 3600 - minutesTens * 600 - minutesOnes * 60) / 10);
    secondsOnes = x - hoursTens * 36000 - hoursOnes * 3600 - minutesTens * 600 - minutesOnes * 60 - secondsTens * 10;
    return hoursTens.toString() + hoursOnes.toString() + ":" + minutesTens.toString() + minutesOnes.toString() + ":" + secondsTens.toString() + secondsOnes.toString();
};

// counting and display function
var countUp = function () {
    total++;
    displayEl.textContent = format(total);
    timer();
};

// timer function 
var timer = function () {
    t = setTimeout(countUp, 1000);
};

// start button
startEl.onclick = function () {
    if (isTimerActive == false) {
        isTimerActive = true;
        timer();
    };
};

// stop button
stopEl.onclick = function () {
    clearTimeout(t);
    isTimerActive = false;
};

// reset button
resetEl.onclick = function () {
    displayEl.textContent = "00:00:00";
    total = 0;
};
