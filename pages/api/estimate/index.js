import base from "../../../middleware/commons";
import {
  deleteOneEstimate,
  createAskEstimate,
  getEstimates,
  ValidateEstimate,
} from "../../../models/estimate";

const handleGet = async (req, res) => {
  res.send(await getEstimates());
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

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send();
  else res.status(404).send();
}


export default base().post(handlerPost).get(handleGet).delete(handleDelete);;
