const _=require('lodash');
const moment=require('moment');
const express=require('express');
const utils=require('./utils');

const app=express();
app.use(express.static(__dirname+'/public/'));

utils.obtenerOrdenes('sample.txt')

app.listen(3000,()=>{
    console.log('Express arrancado');
});