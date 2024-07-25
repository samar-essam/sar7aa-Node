import { messageModel } from "../../../DB/models/message.model.js"
import { catchError } from "../../middlewar/catchError.js"
import QRCode from "qrcode"

const addMsg = catchError(async (req , res ) => {
    await messageModel.insertMany(req.body)
    res.json({ message : "added msg"})
})

const allMsg = catchError(async (req , res ) => {
    
    const messages = await messageModel.find({ receivedId : req.user.userId})
 
     res.json({ message : "success" , messages })
 })

 const shareProfile = catchError(async (req , res ) => {
    
    QRCode.toDataURL("http://localhost:3000/message" , (err , qr) =>{
        res.send(`<img src='${qr}'>`)
    })
 })


export {
    addMsg ,
    allMsg,
    shareProfile
}