import bcrypt from "bcrypt"
import { userModel } from "../../DB/models/user.model.js"
import { appError } from "../utils/appError.js"


export const checkEmail = async(req , res , next) => {
    const user = await userModel.findOne({email : req.body.email})
    if(user) return next(new appError("email already existed" , 409))
    
    req.body.password = bcrypt.hashSync( req.body.password , 8)
    next()
}