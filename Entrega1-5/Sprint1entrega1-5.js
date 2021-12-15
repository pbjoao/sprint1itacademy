// Sprint 1 entrega 1.5

// N1 ex 01

const intervalo = ()=>{
    setInterval(() => {
        console.log('Mensaje repetitiva...')
    }, 1000);
}

//intervalo();

// N1 ex02

const fs = require('fs');

let texto = "Escribiendo un texto en un fichero"

function escribiendo(){
    fs.writeFile('./archivo.txt',{encoding:"utf-8"},texto, error => {
    if(error) console.log (error);
    else console.log('El archivo fue creado con exito!')
    });
}

// N1 ex03

function leyendo(){
    fs.readFile('./archivo.txt',{encoding:"utf-8"},(error, data)=>{
    if(error) console.log(error)
    else console.log(data)
    });
}

leyendo();

// N2 ex01

const zlib = require('zlib');

