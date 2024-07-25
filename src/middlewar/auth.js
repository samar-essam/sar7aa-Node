import jwt from "jsonwebtoken"
import { appError } from "../utils/appError.js"


export const auth = (req , res , next) => {
     jwt.verify( req.header('token') , process.env.JWT_KEY , (err , decoded) => {
            if(err) return next(new appError(err , 401 ))
                req.user = decoded
            next()
    })

}