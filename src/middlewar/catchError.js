import { appError } from "../utils/appError.js"


export const catchError = (fn) => {
    return (req , res , next) => {
        fn(req , res , next).catch(err => {
           next(new appError(err , 401))
        })
    }
}


export const globalErrorHandling = (err , req ,res ,next) => {
    if (process.env.MOOD == "prod") {
        return res.status(err.statusCode || 500).json( {message : err.message})
    }else{
        return res.status(err.statusCode || 500).json( {message : err.message , stack : err.stack})
    }
}