// declare variables needed for project
var displayEl = document.getElementById("display");
var submitEl = document.getElementById("submit-button");
var startEl = document.getElementById("start-button");
var pauseEl = document.getElementById("pause-button");
var cancelEl = document.getElementById("cancel-button");
var formEl = document.getElementById("time-input");
var hoursEl = formEl.elements[0];
var minutesEl = formEl.elements[1];
var total = 0;
var secondsTens = 0;
var secondsOnes = 0;
var minutesTens = 0;
var minutesOnes = 0;
var hoursTens = 0;
var hoursOnes = 0;
var hoursVal = "";
var minsVal = "";
var text = "";
var t;
var isTimerActive = false;
var hasSubmitted = false;

// store user inputted time as a float in 'total' and display submitted time in correct format
var userInput = function () {
    if (hasSubmitted == false) {
        hoursVal += hoursEl.value;
        minsVal += minutesEl.value;
        total = parseFloat(minsVal) * 60 + parseFloat(hoursVal) * 3600;
        text = format(total);
        displayEl.textContent = text;
        hasSubmitted = true;
    }
};

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

// countdown and display function
var countDown = function () {
    if (total > 0) {
        total--;
        displayEl.textContent = format(total);
        timer();
        if (total == 0) {
            alert("Timer finished!");
                displayEl.textContent = "00:00:00";
                hasSubmitted = false;
                isTimerActive = false;
                text = "";
                hoursVal = "";
                minsVal = "";
                total = 0;
        };
    };
};

// timer function 
var timer = function () {
    t = setTimeout(countDown, 1000);
};

// start button
startEl.onclick = function () {
    if (isTimerActive == false) {
        isTimerActive = true;
        timer();
    };
};

// pause button
pauseEl.onclick = function () {
    clearTimeout(t);
    isTimerActive = false;
};

// cancel button
cancelEl.onclick = function () {
    displayEl.textContent = "00:00:00";
    hasSubmitted = false;
    isTimerActive = false;
    text = "";
    hoursVal = "";
    minsVal = "";
    total = 0;
};
