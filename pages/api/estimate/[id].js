import {
  ValidateEstimate,
  updateAskEstimate,
  getOneEstimate,
  deleteOneEstimate,
} from "../../../models/estimate";
import base from "../../../middleware/commons";
// import { requireAdmin } from "../../../middleware/requireAdmin";

async function handlePatch({ query: { id }, body }, res) {
  const validationErrors = ValidateEstimate(body, true);
  if (validationErrors) return res.status(422).send(validationErrors);
  const updated = await updateAskEstimate(id, body);
  console.log(updated);
  if (updated) res.status(200).send(updated);
  else res.status(404).send();
}

async function handleGet({ query: { id } }, res) {
  const estimate = await getOneEstimate(id);
  if (estimate) res.send(estimate);
  else res.status(404).send();
}

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  // .use(requireAdmin)
  .get(handleGet)
  .patch(handlePatch)
  .delete(handleDelete);
