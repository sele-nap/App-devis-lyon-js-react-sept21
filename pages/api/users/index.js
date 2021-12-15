import { validateUser, emailAlreadyExists, create } from "../../../models/user";
import base from "../../../middleware/commons";
// import { requireAdmin } from "../../../middleware/requireAdmin";

async function handler(req, res) {
  const validationError = validateUser(req.body);
  console.log(validationError);
  if (validationError) return res.status(422).send(validationError);
  if (await emailAlreadyExists(req.body.email))
    return res.status(409).send("This email already exists");
  const newUser = create(req.body);
  delete newUser.hashedPassword;
  res.status(201).send(newUser);
}

// async function handlePost(req, res) {
//   const validationErrors = validateUser(req.body);
//   if (validationErrors) return res.status(422).send(validationErrors);
//   const alreadyExists = await emailAlreadyExists(req.body.email);
//   if (alreadyExists) return res.status(409).send("email already taken");
//   const { id, email, name, image } = await createUser(req.body);
//   res.status(201).send({ id, email, name, image });
// }

export default base().post(handler);
