import express from "express"
import { addMsg, allMsg, shareProfile } from "./message.controller.js"
import { auth } from "../../middlewar/auth.js"
import { validation } from "../../middlewar/validation.js"
import { addMsgSchemaVal } from "./message.validation.js"


const msgRouter = express.Router()

msgRouter.post('/message' ,validation(addMsgSchemaVal), addMsg)

msgRouter.get('/message' , auth , allMsg)
msgRouter.get('/shareProfile' , shareProfile)



export default msgRouter