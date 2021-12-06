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

mostrarDatos()
    .then(data => console.log(data))
    .catch(err=>console.log(err))

// N1 ex02

const arrowFunciton = (param, callback)=>{
    
    return (param >= 18) ? callback('Es Mayor edad') : callback('Es menor edad')
    
}

arrowFunciton(19, mgs=> {console.log(mgs)})

// N2 ex 01

