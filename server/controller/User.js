const Form = require("../model/userModel");
const { SendEmail } = require("../utility");

const posted = async (req, res) => {
   try {
      const { fullName, Email, description, active } = req.body;
      console.log(req.body);
     
      //  Send Email
     
      const ExitUser = await Form.findOne({ Email });
      if (ExitUser) {
         return res.status(400).json({ message: "user already exist" });
      }
      // send email
      const response = await SendEmail(fullName, Email);
      const NewForm = new Form({ fullName, Email, description, active });

      // save to database
      await NewForm.save();
console.log(NewForm)
      // return res.status(200).json({message: "user added sucessful", StudentDetail: Newstudent})
      return res.status(200).json({ message: "Form submitted successfully", form: NewForm });
   } catch (error) {
      return res.status(400).json({ message: error });
   }
};

module.exports = {
   posted
};
