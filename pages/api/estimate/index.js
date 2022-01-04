import base from "../../../middleware/commons";
import {
  createAskEstimate,
  getEstimate,
  ValidateEstimate,
} from "../../../models/estimate";

const handleGet = async (req, res) => {
  res.send(await getEstimate());
};

async function handlerPost(req, res) {
  const validationError = ValidateEstimate(req.body);
  console.log(validationError);
  if (validationError) return res.status(422).send(validationError);

  const newEstimate = await createAskEstimate({
    ...req.body,
    customer: { connect: { id: 1 } },
  });

  res.status(201).send(newEstimate);
}

export default base().post(handlerPost).get(handleGet);
