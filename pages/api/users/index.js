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

async function handlePost(req, res) {
  const validationError = validateUser(req.body);
  if (validationError) return res.status(422).send(validationError);
  if (await emailAlreadyExists(req.body.email))
    return res.status(409).send("This email already exists");
  const emailVerificationCode = crypto.randomBytes(50).toString("hex");
  const newUser = await create(req.body);

  const { email } = {
    ...newUser,
    emailVerificationCode,
  };
  const mailBody = `Rendez-vous sur ce lien pour vérifier votre email : ${process.env.HOST}/validationemail?emailVerificationCode=${emailVerificationCode}`;
  await mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: email,
    subject: `Vérifier votre email`,
    text: mailBody,
    html: mailBody,
  });

  delete newUser.hashedPassword;
  res.status(201).send(newUser);
}

const handleGet = async (req, res) => {
  if (req.currentUser.role === "admin") {
    res.send(await getUsers());
  } else {
    res.send([req.currentUser]);
  }
};

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneUser(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  .post(handlePost)
  .get(requireCurrentUser, handleGet)
  .delete(requireCurrentUser, handleDelete);
