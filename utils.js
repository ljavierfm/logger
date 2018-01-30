const readline = require('readline');
const fs=require('fs');

const cadenaInicio='COMIENZO DE LA ORDEN :';

function obtenerOrdenes(fichero){
    let ordenes=[];

    const rl=readline.createInterface({
        input:fs.createReadStream(__dirname+`/uploads/${fichero}`)
    });
    
    rl.on('line',(line)=>{
        if(cadenaInicio.indexOf(line)>-1){
            console.log(line);
        }
        else{
            console.log('no contiene');
        }
    });
}



module.exports = {
    firstName: 'James',
    lastName: 'Bond',
    obtenerOrdenes
}