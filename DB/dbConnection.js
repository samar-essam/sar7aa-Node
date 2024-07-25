import mongoose from "mongoose";




export const dbConnection = ()=>{
    mongoose.connect('mongodb+srv://samarEssam:gQVCo8HX6ouygB0o@cluster0.6hiiuac.mongodb.net/sara7a-app')
    .then( ()=> console.log("db connected"))
    .catch( (err)=> console.log( "database err",err))
}

