const express=require('express');
const app=express()
const cors=require('cors')
require('./conexion');
const rutausuario=require('./rutas/usuario')
const bodyParser=require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/usuario', rutausuario)


app.get('/', (req,res)=>{
    res.end('bienvenido al servidor')
})
app.listen(5000, function(){
    console.log('el servidor esta corriendo correctamente')
})

