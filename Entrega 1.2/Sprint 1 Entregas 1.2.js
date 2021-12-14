//Entrega 1.2

// N1 ex01
console.log(((num1,num2)=>{
    return num1 + num2;
})(2,1));


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


class Abstracta{
    constructor(){
        if(new.target===Abstracta){
            throw new Error("Esta clase es abstracta y no puede ser instanciada");
        }
    }

}

//TODO crear una funcion que instancia objetos abstractos

function crarObj(){

    Object.create(Abstracta.prototype)
}

let obj1 = crarObj();
let obj2 = crarObj();

console.log(crarObj(obj1, obj2));

//