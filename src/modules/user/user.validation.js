import joi from 'joi'

const signupSchemaVal = joi.object({
    name : joi.string().min(2).max(40).required() ,
    email : joi.string().email().required() ,
    age : joi.number().min(10).max(80).required() ,
    password : joi.string().required() ,
    rePassword : joi.valid(joi.ref("password")).required()
})


const signinSchemaVal = joi.object({
    email : joi.string().email().required() ,
    password : joi.string().required() ,
})



export {
    signupSchemaVal ,
    signinSchemaVal
}