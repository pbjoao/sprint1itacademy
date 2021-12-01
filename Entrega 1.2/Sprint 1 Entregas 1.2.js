//Entrega 1.2

// N1 ex01
(function(num1, num2){console.log(num1 + num2);


// N2 ex01
// TODO crear una arrow function

//arrow function
let arrowFuncion = newColor => obj = {color: newColor}

console.log(arrowFuncion('azul'));


// N2 ex 02
//TODO crear una clase e invocar una funcion decir nombre

class Persona{
    constructor (nombre){ 
        this.nombre = nombre;         
    }
    dirNome(){
        return "Mi nombre es " + this.nombre;
    }
}

let persona1 = new Persona('Jose');

console.log(persona1.dirNome());

// N3 ex 01
//TODO crear una clase abastracta


// class Abstracta{
//     constructor(){
//         if(new.target===Abstracta){
//             throw new Error("Esta clase es abstracta y no puede ser instanciada");
//         }
//     }

// }

// //TODO crear una funcion que instancia objetos abstractos

// function crarObj(newObj){

//     newObj = {
//         prop1:'',
//         prop2:0   
//     }
//     claseAbst = new ClaseAbst();
// }

// console.log(crarObj('obj1'));