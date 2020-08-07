// Estructura de las promesas
const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Hey!!')
        } else {
            reject('Whoops!')
        }
    })
}

//Ejecutamos la promesa recordando que haran los parametros con .then
// para la resolucion y .catch para el error
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillhappen2 = () => {
    //Recuerda pasar la palabra Promise con mayuscula para que sea reco-
    //nocida la funcion como una promesa y no un objeto
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else {
            const error = new Error('Whoop')
            reject(error)
        }
    })
}

somethingWillhappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

//Corriendo varias promsesas a la vez - Promose.all
Promise.all([somethingWillHappen(), somethingWillhappen2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })

