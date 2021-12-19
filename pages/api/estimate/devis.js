import base from "../../../middleware/commons";
import { create, ValidateEstimate } from "../../../models/devis";

async function handler(req, res) {
  const validationError = ValidateEstimate(req.body);
  console.log(validationError);
  if (validationError) return res.status(422).send(validationError);

  const newEstimate = create(req.body);

  res.status(201).send(newEstimate);
}
export default base().post(handler);
