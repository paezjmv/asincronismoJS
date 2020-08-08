const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    })
}

//Sintaxis para async/await
const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something)
}

console.log('Before')
doSomething()
console.log('After')

const anotherFunction = async () => {
    //try-catch nos permite ejecutar la prueba y error: Intenta ejecutar
    //esto, sino, manda el error por aqui
    try {
        const something = await doSomethingAsync()
        console.log(something, 'Second example')
    } catch (error) {
        console.error(error)
    }
}

console.log('Before 1')
anotherFunction()
console.log('After 2')