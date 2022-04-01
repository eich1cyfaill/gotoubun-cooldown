const timerEl = document.getElementsByClassName('timerbox__time')
const textEl = document.getElementsByClassName('timerbox__text')
const bodyEl = document.getElementsByClassName("body")

function setCountdown(){
    const currentDate = new Date()
    const comingDate = new Date("20 May 2022")

    const totalSeconds = (comingDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    days < 10 && days > 0 ? days = "0" + days : days
    hours < 10 && hours > 0 ? hours = "0" + hours : hours
    minutes < 10 && minutes > 0 ? minutes = "0" + minutes : minutes
    seconds < 10 && seconds > 0 ? seconds = "0" + seconds : seconds


    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        bodyEl[0].style.backgroundImage = "url('nino.jpg')"
        bodyEl[0].style.backgroundRepeat = "no-repeat"
        textEl[0].textContent = "Ура! Ура! Давай! Новый Готобун вышел!"
    }


    let dateArray = [days, hours, minutes, seconds].join(':')
    timerEl[0].textContent = dateArray


}

setInterval(setCountdown, 1000)