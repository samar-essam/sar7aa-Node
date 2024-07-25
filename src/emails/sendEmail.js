import nodemailer from "nodemailer";
import { emailTemplate } from "./emailTemplate.js";
import jwt from "jsonwebtoken"

export const sendEmail = async(email) => {

    const transporter = nodemailer.createTransport({
        service : "gmail" ,
        auth: {
          user: "samaresam243@gmail.com",
          pass: "hsccrznnjsgiuwvg",
        },
         tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
      },
      });
      
      let token = jwt.sign(email , process.env.JWT_KEY)
        const info = await transporter.sendMail({
          from: '"samaaaaaaaaar 👻" <samaresam243@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html:emailTemplate(token), // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        

}

