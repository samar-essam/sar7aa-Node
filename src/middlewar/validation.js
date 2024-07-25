import { appError } from "../utils/appError.js"


export const validation = (schema) => {
    return (req , res , next) => {
        const {error} = schema.validate({...req.params , ...req.query , ...req.body , ...req.header}, {abortEarly : false})
        if (!error) {
            next()
        }else{
            // res.json({message : 'Validation Error' , Error : error.details})
            let errMsg = []
            error.details.forEach(val => {
                errMsg.push(val.message)
            });
            next( new appError(errMsg , 401))
        }
    }
}