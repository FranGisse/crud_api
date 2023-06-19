const ModeloUsuarioo=require('../model');

const cargarNueva=async(nombre,email,telefono,idusuario)=>{
    const nuevousuarioo=new ModeloUsuarioo({
        nombre:nombre,
        email:email,
        telefono:telefono,
        idusuario:idusuario

    })
    let resultado=await ModeloUsuarioo.collection.insertOne(nuevousuarioo);
    return resultado}
    
    const traerDocCompleta= async()=>{
        let accesorioGuardado = await ModeloUsuarioo.find();
        return accesorioGuardado}

        const dataUnUsuario=async(dato)=>{
            let data= await ModeloUsuarioo.find(dato);
            return data}

             let actualizarDato= async(info)=>{
                let actualizar= {nombre:info.nombre,email:info.email,telefono:info.telefono}
                console.log(actualizar,info.idusuario)
            const resultado=await ModeloUsuarioo.updateOne({idusuario:info.idusuario},{$set:actualizar})
            return resultado

            }
            const eliminarUsuario = async(dato)=>{
                const resultado=await ModeloUsuarioo.deleteOne(dato)
                return resultado
            }

            module.exports={cargarNueva,traerDocCompleta,dataUnUsuario,actualizarDato,eliminarUsuario}