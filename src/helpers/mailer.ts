import  bcryptjs  from 'bcryptjs';
import nodemailer from 'nodemailer';
import User from '@/models/userModel';

export const sendEmail = async({email, emailType, userId} : any) => {
    try {
        // Create A Hashed Token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);

        if(emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId, {
                verifyToken : hashedToken,
                verifyTokenExpiry : Date.now() + 3600000
            });
        }
        else if(emailType==="RESET"){
            await User.findByIdAndUpdate(userId, {
                forgotPassword : hashedToken,
                forgotPasswordTokenExpiry : Date.now() + 3600000
            });
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.NODEMAILER_USER,
              pass: process.env.NODEMAILER_PASSWORD
            }
          });

          const mailOptions = {
            from : "arpeetbhavsar01@gmail.com",
            to : email,
            subject : emailType==="VERIFY" ? "Verify your email" : "Reset your password" ,
            html : `<p>Click <a href='${process.env.DOMAIN}/verifyemail?token=${hashedToken}'>here</a> to ${emailType==="VERIFY" ? "Verify your email" : "Reset your password"}</p> `
          }

          const mailResponse = await transport.sendMail(mailOptions);

          return mailResponse;
    } catch (error : any) {
        throw new Error(error.message);
    }
}