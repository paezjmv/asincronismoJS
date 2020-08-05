function sum(num1, num2) {
    return num1 + num2
}

//se le pone el paramatro callback como practica general. Funciona mejor
//para identificarla    
function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(6, 2, sum))

function date(callback) {
    console.log(new Date)
    setTimeout(function name(params) {
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate)
