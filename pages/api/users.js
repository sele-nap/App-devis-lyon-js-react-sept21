import { validateUser, emailAlreadyExists, create } from "../../models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    const validationError = validateUser(req.body);
    if (validationError) {
      res.status(422).send(validationError);
    } else {
      if (await emailAlreadyExists(req.body.email)) {
        res.status(409).send("This email already exists");
      } else {
        const newUser = await create(req.body)
        delete newUser.hashedPassword
        res.status(201).send(newUser)
      }
    }
    console.log(validationError);
  } else {
    res.status(405).send("Game Over");
  }
}
