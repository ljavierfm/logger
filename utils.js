const readline = require('readline');
const fs=require('fs');
const _=require('lodash');

let criterioBusqueda='COMIENZO DE LA ORDEN : ';

function  obtenerOrdenes(fichero){
    let archivoBusqueda=fichero;
    return  new Promise((resolve,reject)=>{
        let ordenes=[];
        let rl;

        if(archivoBusqueda!==''){
            rl=readline.createInterface({
                input:fs.createReadStream(__dirname+'/uploads/'+archivoBusqueda)
            });
        }
        else{
            resolve({error:'fichero no valido'});
        }
        
        
        rl.on('line',(line)=>{
            if(_.includes(line, criterioBusqueda)){
                let ordenLinea=extraerOrdenDeLinea(line);
                ordenes=_.concat(ordenes,ordenLinea);
            }
        });
    
        rl.on('close',()=>{
            ordenes=_.uniq(ordenes);
            resolve({error:'',ordenes:ordenes});
        });
    });
}

function extraerOrdenDeLinea(cadena){
    let ordenCadena=_.trim(cadena,criterioBusqueda);
    let tmpArrayOrdenes=_.split(ordenCadena,"\t\t\t");
    return tmpArrayOrdenes;
}

module.exports = {
    obtenerOrdenes
}