import base from "../../../middleware/commons";
import { createAskEstimate, ValidateEstimate } from "../../../models/estimate";

async function handler(req, res) {
  const validationError = ValidateEstimate(req.body);
  console.log(validationError);
  if (validationError) return res.status(422).send(validationError);

  const newEstimate = await createAskEstimate({
    ...req.body,
    customer: { connect: { id: 1 } },
  });

  res.status(201).send(newEstimate);
}
export default base().post(handler);
