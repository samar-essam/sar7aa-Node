import mongoose from "mongoose";




export const dbConnection = ()=>{
    mongoose.connect('mongodb://0.0.0.0:27017/sara7a')
    .then( ()=> console.log("db connected"))
    .catch( (err)=> console.log( "database err",err))
}

