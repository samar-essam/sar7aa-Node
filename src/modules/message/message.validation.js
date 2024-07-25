import joi from 'joi'

const addMsgSchemaVal = joi.object({
    message : joi.string().min(2).max(200).required() ,
    receivedId : joi.string().hex().length(24)
})


export {
    addMsgSchemaVal
}