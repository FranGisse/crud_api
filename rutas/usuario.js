const express=require('express')
const router=express.Router()
const{agregaNota,traerInfo,obtenerData, actualizadaUsuario,eliminarDato}=require('../controllers/controllers')



router.get('/infoCompleta',traerInfo);

router.post('/agregaNota',agregaNota);

router.get('/obtenerdatausuario/:idusuario',obtenerData);

router.post('/actualizausuario',actualizadaUsuario);

router.delete('/borrarusuario',eliminarDato)


module.exports=router

   
        

