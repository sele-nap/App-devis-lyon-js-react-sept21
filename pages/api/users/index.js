import { validateUser, emailAlreadyExists, create } from "../../models/user";
import handler from "../../middleware/commons.js";

export default handler().post((req, res) => {
  const validationError = validateUser(req.body);
  if (validationError) return res.status(422).send(validationError);
  if (await emailAlreadyExists(req.body.email))
    return res.status(409).send("This email already exists");
  const newUser = await create(req.body);
  delete newUser.hashedPassword;
  res.status(201).send(newUser);
});
