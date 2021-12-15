// Entregas 1.4


// N1 ex01
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
 
//salaries
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

// funcion getEmpleados
const getEmplyee = (id) => {

    return new Promise((resolve, reject) => {

        const emplyeeGetted = employees.find(employees => employees.id === id);

        emplyeeGetted ? resolve(emplyeeGetted) : reject (new Error('Id no encontrado!'))
    
    });
}

// funcion getSalaries
const getSalary = (empleado) => {

        return new Promise((resolve, reject) => {
        
            const salaryGetted = salaries.find(salaries => salaries.id == empleado.id);
        
            salaryGetted ? resolve(salaryGetted.salary) : reject (new Error('Empleado no encontrado'))
            
         });
}

getEmplyee(3)
        .then (resp => getSalary(resp))
        .then (resp => console.log(`salario: ${resp}€`))


// N1 ex02

async function gettingDatos(id){
    
    try{
        const nomEmpleado = await getEmplyee(id)
        const salary = await getSalary(nomEmpleado)
            
        console.log(`Empleado: ${nomEmpleado.name}, sueldo: ${salary}€`);
    
    } catch(err){
        console.log(err.message);

    }
}

gettingDatos(1);


// N2 ex01

function retraso(){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve('Hola!')}, 2000)})
}

async function pruebaRetraso(){
    let prueba = await retraso();
    console.log(prueba)
}

pruebaRetraso();

// N3 ex01

getEmplyee(3)
        .catch(err => console.log(err))
