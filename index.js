const _=require('lodash');
const moment=require('moment');
const express=require('express');
const utils=require('./utils');

const app=express();
app.use(express.static(__dirname+'/public/'));

app.use('/ordenes',(req,resp)=>{
    resp.setHeader('Content-Type', 'application/json');
    let obtenerOrdenes=utils.obtenerOrdenes('sample.txt');
    //let obtenerOrdenes=utils.obtenerOrdenes('');
    obtenerOrdenes.then((ordenes)=>{
        resp.send(JSON.stringify(ordenes));
    }).catch((err)=>{
        console.log(err);
    });
});


app.listen(3000,()=>{
    console.log('Express arrancado');
});