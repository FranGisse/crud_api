const mongoose=require('mongoose')
const eschema=mongoose.Schema

const eschemauusuario=new eschema({
    nombre:String,
    email:String,
    telefono:String,
    idusuario:String

})
module.exports=mongoose.model('usuarios',eschemauusuario)