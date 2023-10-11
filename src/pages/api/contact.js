
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });



export default async function handler(req, res) {
    console.log(process.env.EMAIL_USER, 'iuhdiuhjhb')
    try {
        const { firstName, lastName, email, phoneNumber, message, userProvidedEmail } = req.body;
    
        const mailOptions = {
          from: userProvidedEmail,
          to: 'info@luxandnoblerealty.com', 
          subject: 'Contact us form',
          text: `
            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone Number: ${phoneNumber}
            Message: ${message}
          `,
        };
    
        await transporter.sendMail(mailOptions);
    
        res.status(200).json({ message: 'Form submitted successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };