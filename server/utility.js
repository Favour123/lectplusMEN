const nodemailer = require("nodemailer");

const SendEmail = async (fullName, Email) => {
   try {
      // create Transport
      let mailerTransport = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.EmailPassword}`,
         },
      });
      //       create users details
      let maildetails = {
         from: "info@anettcom.com",
         to:  Email,
         subject: "Hiring from LETPLUS",
         html: `<div style="color:white; background-color:green; padding:20px">
                        <p>Hello ${fullName}</p>
                        <p>thanks for subscribing to our service</p>
                        </br>  </br>  </br>
                                </br>
                                </br>
                        <p> please do hold for few minutes still we get back to you </p>
                        <p> you can delete this email if not subscribe to it </p>
                 </div>`,
      };
      //       ask Transport to send mails details
      const result = await mailerTransport.sendMail(maildetails,(error, info) => {
           if (error) {
              return console.log(error);
           }
           console.log("Email sent: " + info.response);
           res.status(200).json({ message: "Email sent successfully" });
        });
   } catch (error) {
      return console.log(error);
   }
};

module.exports = { SendEmail };
