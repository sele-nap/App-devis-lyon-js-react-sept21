export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({});
  console.log(req.body);
}

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "wilder.app.devis@gmail.com",
    pass: process.env.password;
  },
  secure: true,
});

const mailData = {
    from: "wilder.app.devis@gmail.com",
    to: 'your email',
    subject: `Message From ${req.body.firstname}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>
   }
