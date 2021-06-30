let minutes = 0
let seconds = 0
let miliseconds = 0

let cron;

function startTimer() {
    cron = setInterval(() => {
        timer()
    }, 15)

    document.querySelector("#start").setAttribute("disabled", "disabled")
}

function stopTimer() {
    clearInterval(cron)

    document.querySelector("#start").removeAttribute("disabled", "disabled")
}

function resetTimer() {
    clearInterval(cron)

    minutes = 0
    seconds = 0
    miliseconds = 0

    document.querySelector("#cont").innerHTML = "00:00:00"

    document.querySelector("#start").removeAttribute("disabled", "disabled")
}

function timer() {
    miliseconds++

    if(miliseconds == 60) {
        miliseconds = 0
        seconds++
    }

    if(seconds == 60) {
        seconds = 0
        minutes++
    }

    let formatTimer = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + ":" + (miliseconds < 10 ? "0" + miliseconds : miliseconds)

    document.querySelector("#cont").innerHTML = formatTimer

}