require('dotenv').config();
const mongoose=require('mongoose')
const user=process.env.USER_DB;
const password=process.env.PASS_DB;
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.c5ggeoe.mongodb.net/?retryWrites=true&w=majority`);

const objetobd=mongoose.connection
objetobd.on('connected', ()=>{console.log('conexion correcta db')})
objetobd.on('error', ()=>{console.log('error en la conexion')})
module.exports= mongoose
