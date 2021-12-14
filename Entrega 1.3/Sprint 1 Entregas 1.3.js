// Entregas 1.3

// N1 ex 01
 
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
    
    callback(param);
    
}

const callback = param => {
    if(param >= 18){
        console.log('Es Mayor edad');
    } else {
        console.log('Es menor edad');
    }
}

arrowFunciton(19, callback);

// N2 ex 01

//empleados
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
//salarios
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmplyee = (id) => {

    return new Promise((resolve, reject) => {

        const emplyeeGetted = employees.find(employees => employees.id === id);

        emplyeeGetted ? resolve(emplyeeGetted) : reject (new Error('Id no encontrado!'))
    
    });
}

getEmplyee(3)
        .then(respId => console.log(respId))
        .catch(error => console.log(error))
    
   
// N2 ex02

const getSalary = (empleado) => {

    return new Promise((resolve, reject) => {

        const salaryGetted = salaries.find(salaries => salaries.id == empleado.id);

        salaryGetted ? resolve(salaryGetted.salary) : reject (new Error('Empleado no encontrado'))
    
    });
}

getSalary({
    id: 1,
    name: 'Linux Torvalds'
})
        .then (respSalary => console.log(`salario: ${respSalary}€`))
        .catch (error => console.log(error))


// N2 ex03

getEmplyee(2)
        .then (resp => getSalary(resp))
        .then (resp => console.log(`salario: ${resp}€`))
       
        
// N3 ex1        
        
      .catch(error => console.log(error.message))

