const readline = require('readline');
const fs=require('fs');
const S = require('string');
const _=require('lodash');

let cadenaInicio='COMIENZO DE LA ORDEN : ';


function obtenerOrdenes(fichero){
    let ordenes=[];

    const rl=readline.createInterface({
        input:fs.createReadStream(__dirname+`/uploads/${fichero}`)
    });
    
    rl.on('line',(line)=>{
        if(S(line).contains(cadenaInicio)){
            let ordenLinea=extraerOrdenDeLinea(line);
            ordenes=_.concat(ordenes,ordenLinea);
        }
    });

    rl.on('close',()=>{
        ordenes=_.uniq(ordenes);
    });
}

function extraerOrdenDeLinea(cadena){
    let ordenCadena=_.trim(cadena,cadenaInicio);
    let tmpArrayOrdenes=_.split(ordenCadena,"\t\t\t");
    return tmpArrayOrdenes;
}

module.exports = {
    obtenerOrdenes
}