const{traerDocCompleta,cargarNueva,dataUnUsuario,actualizarDato,eliminarUsuario}=require('./funcionesDb')

const agregaNota=async(req,res)=>{
    const {nombre,email,telefono,idusuario}=req.body;
     let respuestaDB =await cargarNueva(nombre,email,telefono,idusuario)
     console.log(respuestaDB)
     res.send("ok")
    }

     const traerInfo=async(req,res)=>{
        let info= await traerDocCompleta();
        console.log(info)
        res.send(info)
    }

        const obtenerData=async(req,res)=>{
            let dato=req.params.idusuario;
            console.log(dato)
            let info= await dataUnUsuario({idusuario:dato});
            res.send(info)}
            
            const actualizadaUsuario= async(req,res)=>{
                const{nombre,email,telefono,idusuario}=req.body;
                let respuesta=await actualizarDato(req.body)
                console.log(respuesta)
            }
          const eliminarDato= async(req,res)=>{
            let dato=req.params.idusuario;
            console.log(dato)
            let info=await eliminarUsuario()
            res.send(info)

          }
            
module.exports={agregaNota,traerInfo,obtenerData,actualizadaUsuario,eliminarDato}        