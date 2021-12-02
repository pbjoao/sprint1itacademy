// Entregas 1.3

// N1 ex 01
//TODO funciones promise

let ejemploDatos = 0;

function mostrarDatos(){

    return new Promise ((resolve, reject) => {    

        if(ejemploDatos === 0)
        {
            reject(new Error('No hay datos')) 
        }
        else
        {
            resolve(ejemploDatos)
        }
    })
}

mostrarDatos()
    .then(data => console.log(data))
    .catch(err=>console.log(err))