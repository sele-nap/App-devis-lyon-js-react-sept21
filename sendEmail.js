const emailer = require("./mailer");

emailer.sendMail(
  {
    from: "bastien-le-calvez_student2021@wilder.school.",
    to: "bastien.lecalvez@gmail.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);
