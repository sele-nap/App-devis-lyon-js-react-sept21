import { validateUser, emailAlreadyExists, create } from "../../../models/user";
import base from "../../../middleware/commons";
// import mailer from "@mailer";
// import crypto from "crypto";
// import { requireAdmin } from "../../../middleware/requireAdmin";

async function handler(req, res) {
  const validationError = validateUser(req.body);
  if (validationError) return res.status(422).send(validationError);
  if (await emailAlreadyExists(req.body.email))
    return res.status(409).send("This email already exists");
  // const emailVerificationCode = crypto.randomBytes(50).toString("hex");
  // const { id, email, firstname } = await create({
  //   ...req.body,
  //   emailVerificationCode,
  // });
  // const mailBody = `Rendez-vous sur ce lien pour vérifier votre email : ${process.env.HOST}/confirm-email?emailVerificationCode=${emailVerificationCode}`;
  // await mailer.sendMail({
  //   from: process.env.MAILER_FROM,
  //   to: email,
  //   subject: `Vérifier votre email`,
  //   text: mailBody,
  //   html: mailBody,
  // });

  const newUser = create(req.body);
  delete newUser.hashedPassword;
  res.status(201).send(newUser);
}

export default base().post(handler);
