export function updateTime() {
    let greeting:String;
    let now = new Date();

    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    let fixZeroHour = hour < 10 ? '0'+hour : hour.toString()
    let fixZeroMinute = minute < 10 ? '0'+minute : minute.toString()
    let fixZeroSeconds = seconds < 10 ? '0'+seconds : seconds.toString()

    if(hour < 12) {
        greeting = `Bom dia`
    } else if(hour < 18) {
        greeting = `Boa tarde`
    } else {
        greeting= `Boa noite`
    }

    return {
        clock: `${fixZeroHour}:${fixZeroMinute}`,
        greeting
    }
}