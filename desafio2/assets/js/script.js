let clock = document.querySelector('.clock')
let greeting = document.querySelector('.greeting')
let username = 'Fábio'

function updateTime() {
    let now = new Date();

    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    clock.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`

    getMoment(hour)
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

function getMoment(hour) {
    if(hour < 12) {
        greeting.innerHTML = `Bom dia, ${username}`
    } else if(hour < 18) {
        greeting.innerHTML = `Boa tarde, ${username}`
    } else {
        greeting.innerHTML = `Boa noite, ${username}`
    }
}

setInterval(updateTime, 1000);