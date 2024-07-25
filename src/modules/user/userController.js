import { userModel } from "../../../DB/models/user.model.js"
import { sendEmail } from "../../emails/sendEmail.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'
import { catchError } from "../../middlewar/catchError.js"
import { appError } from "../../utils/appError.js"


const signup = catchError(async (req ,res , next) => {

    await userModel.insertMany(req.body) 
    sendEmail(req.body.email)
     res.json({message :"added account"})
 })

const signin = catchError(async (req ,res , next) => {

    const user = await userModel.findOne({email : req.body.email})
    if(user && bcrypt.compareSync(req.body.password , user.password)){
         const token = jwt.sign( {userId :user._id , email:req.body.email }, process.env.JWT_KEY)
         return res.json({message : "login done" , token})
    }
    // return res.json({message : "err" })
    next(new appError("email or password is incorrect" , 401))
  })

const verify = catchError(async (req ,res , next) => {
    jwt.verify(req.params.token ,process.env.JWT_KEY , async (err , decoded)=> {
        if (err) return next(new appError(err , 401))
        await userModel.findOneAndUpdate({ email : decoded } , {verifyEmail :true})
        res.json({message :"email is verified" })
    })
    
})


export {
    signup ,
    verify ,
    signin
}