import {
  validateUser,
  emailAlreadyExists,
  create,
  getUsers,
  deleteOneUser,
} from "../../../models/user";
import base from "../../../middleware/commons";
import mailer from "../../../mailer";
import crypto from "crypto";
import requireCurrentUser from "../../../middleware/requireCurrentUser";

async function handler(req, res) {
  const validationError = validateUser(req.body);
  if (validationError) return res.status(422).send(validationError);
  if (await emailAlreadyExists(req.body.email))
    return res.status(409).send("This email already exists");
  const emailVerificationCode = crypto.randomBytes(50).toString("hex");
  const { id, email, lastname } = await create({
    ...req.body,
    emailVerificationCode,
  });
  const mailBody = `Rendez-vous sur ce lien pour vérifier votre email : ${process.env.HOST}/validationemail?emailVerificationCode=${emailVerificationCode}`;
  await mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: email,
    subject: `Vérifier votre email`,
    text: mailBody,
    html: mailBody,
  });

  const newUser = create(req.body);
  delete newUser.hashedPassword;
  res.status(201).send(newUser);
}

const handleGet = async (req, res) => {
  const customerId =
    req.currentUser.role === "admin" ? undefined : req.currentUser.id;
  const contact = await getUsers({
    customerId,
  });
  res.send(contact);
};

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneUser(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  .post(handler)
  .get(requireCurrentUser, handleGet)
  .delete(requireCurrentUser, handleDelete);
