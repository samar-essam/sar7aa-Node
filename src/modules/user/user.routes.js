import express from "express"
import { checkEmail } from "../../middlewar/checkEmail.js"
import { signin, signup, verify } from "./userController.js"
import { validation } from "../../middlewar/validation.js"
import { signinSchemaVal, signupSchemaVal } from "./user.validation.js"

const userRouter = express.Router()

userRouter.post('/signup' ,validation(signupSchemaVal), checkEmail , signup)
userRouter.post('/signin' ,validation(signinSchemaVal), signin)
userRouter.get('/verify/:token' , verify)




export default userRouter