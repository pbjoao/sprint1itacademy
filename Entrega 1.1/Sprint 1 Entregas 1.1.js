
//Sigue la lista de ejercicios del Sprint 1 entregas 1.1

// N1 ex01
let nombre = "";

function saludar(nombre){

    console.log("El nombre del usuario es: " + nombre);
}

saludar("Manuel");


// N2 ex01
nombre = "Jose";
let apellido = "Ramirez";

console.log(`Hola ${nombre} ${apellido}`);



// N2 ex02
let numero=0;

function valor(numero){

    console.log(`El valor es ${numero}`);
}

valor(3);


// N3 ex01

var arrayLoops = [];

function loop(){

    for(i=0; i<=9; i++){

        console.log(i);
    }   
    console.log("final loop")
 }

 while(arrayLoops.length<10){

    arrayLoops.push(loop());
 }
 
arrayLoops[i];


// N3 ex02
var exN3 = (function(nombre){console.log(nombre)})("jose");

//