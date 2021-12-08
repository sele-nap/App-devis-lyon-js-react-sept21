import { validateUser } from "../../models/user";

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    const validationError = validateUser(req.body);
    console.log(validationError);
  } else {
    res.status(405).send("Game Over");
  }
}
