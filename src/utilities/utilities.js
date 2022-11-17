export const hoursUntilNow = (day) => {
    var start = new Date(day)
    var today = new Date()
    // (1000*60*60*24) --> milisegundos -> segundos -> minutos -> horas -> días

    return Math.floor((today - start) / 1000 / 60 / 60)
}