const _=require('lodash');
const moment=require('moment');
const fs=require('fs');
const express=require('express');

const app=express();
app.use(express.static(__dirname+'/public/'));
app.use(express.static(__dirname+'/uploads/'));




app.listen(3000,()=>{
    console.log('Express arrancado');
});