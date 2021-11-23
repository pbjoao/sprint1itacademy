
//Sigue la lista de ejercicios del Sprint 1 entregas 1.1

// N1 ex01
let nombre = "";

function saludar(nombre){

    console.log("El nombre del usuario es: " + nombre);
}

console.log(saludar("Manuel"));


// N2 ex01
let nombre = "Jose";
let apellido = "Ramirez";

console.log(`Hola ${nombre} ${apellido}`);



// N2 ex02
let numero=0;

function valor(numero){

    console.log(`El valor es ${numero}`);
}

console.log(valor(3));


// N3 ex01
function loop1(){
    for(i=0; i<=10; i++){
        console.log(i);       
    }
    console.log("final loop")
 }

 function loop2(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

 function loop3(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }
 function loop4(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }
 function loop5(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

 function loop6(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

 function loop7(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

 function loop8(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

 function loop9(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

 function loop10(){
    for(i=0; i<=10; i++){
        console.log(i);
    }
    console.log("final loop")
 }

loops = [loop1(), loop2(), loop3(), loop4(), loop5(), loop6(), loop7(), loop8(), loop9(), loop10()];

for(let x in loops){
    console.log(x);
}


// N3 ex02
(function(nombre){console.log(nombre)})("jose");

//jjjj