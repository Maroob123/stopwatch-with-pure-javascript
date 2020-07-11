var mixBut = document.getElementById("mixBut");

mixBut.addEventListener("click", Start);

function Start() {
    console.log("Started");
    mixBut.removeEventListener("click", Start);
    mixBut.addEventListener("click", Stop);
    var but = mixBut.value = "Stop";
    interval = setInterval(timer, 10);
}

function Stop() {
    console.log("Stopped");
    clearInterval(interval);
    mixBut.removeEventListener("click", Stop);
    mixBut.addEventListener("click", Start);
    mixBut.value = "Start";
}

function reset() {
    var hr2 = 0;
    var hr1 = 0;
    var min2 = 0;
    var min1 = 0;
    var sec2 = 0;
    var sec1 = 0;
    var msec = 0;
    document.getElementById("hrtwos").innerHTML = 0;
    document.getElementById("hrones").innerHTML = 0;
    document.getElementById("mintwos").innerHTML = 0;
    document.getElementById("minones").innerHTML = 0;
    document.getElementById("sectwos").innerHTML = 0;
    document.getElementById("secones").innerHTML = 0;
    document.getElementById("milisec").innerHTML = 0;
    clearInterval(interval);

}
var hr2 = 0;
var hr1 = 0;
var min2 = 0;
var min1 = 0;
var sec2 = 0;
var sec1 = 0;
var msec = 0;

var hrheading2 = document.getElementById("hrtwos");
var hrheading1 = document.getElementById("hrones");
var minheading2 = document.getElementById("mintwos");
var minheading1 = document.getElementById("minones");
var secheading2 = document.getElementById("sectwos");
var secheading1 = document.getElementById("secones");
var milisec = document.getElementById("milisec");
var interval;
function timer() {
    msec++
    milisec.innerHTML = msec;
    if (msec >= 100) {
        sec1++
        secheading1.innerHTML = sec1;
        msec = 0;
    }
    else if (sec1 > 9) {
        secheading2.innerHTML = '';
    }
    if (sec1 >= 59) {
        minheading1.style.color = "black"
        minheading2.style.color = "black"
        document.getElementById("mincolon").style.color = "black"
        min1++
        minheading1.innerHTML = min1;
        msec = 0;
        sec1 = 0;
        secheading2.innerHTML = 0;
        secheading1.innerHTML = 0;

    }
    else if (min1 > 9) {
        minheading2.innerHTML = '';
    }
    if (min1 >= 59) {
        hrheading1.style.color = "black"
        hrheading2.style.color = "black"
        document.getElementById("hrcolon").style.color = "black"
        hr1++
        hrheading1.innerHTML = hr1;
        msec = 0;
        sec1 = 0;
        min1 = 0;
        minheading1.innerHTML = 0;
        minheading2.innerHTML = 0;
        secheading2.innerHTML = 0;
        secheading1.innerHTML = 0;
    }
    else if (hr1 > 9) {
        hrheading2.innerHTML = 0;
    }

}

// interval = setInterval(timer,10);