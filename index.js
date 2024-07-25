process.on('uncaughtException' , (err) => {
    console.log("Error" , err);
})

import express from 'express'
import { dbConnection } from './DB/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import msgRouter from './src/modules/message/message.routes.js'
import { globalErrorHandling } from './src/middlewar/catchError.js'
import { appError } from './src/utils/appError.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()
app.use(cors())
const port = 3000

app.use(express.json())
app.use(userRouter)
app.use(msgRouter)

app.get('/', (req, res) => res.send('Hello World!'))
dbConnection()
app.use('*' , (req , res ,next ) => {
    next(new appError( `not fount endPoint ${req.originalUrl}` , 404))
})

app.use(globalErrorHandling)

process.on('unhandledRejection' , (err) => {
    console.log("Error" , err);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))