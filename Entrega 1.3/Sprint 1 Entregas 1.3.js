// Entregas 1.3

// N1 ex 01
//TODO funciones promise

let ejemploDatos = 'aqui están los datos';

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

mostrarDatos(resolve, reject);
