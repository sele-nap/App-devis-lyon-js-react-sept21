import base from "../../../middleware/commons";
import { deleteFile } from "../../../models/attachedFiles";
import { getOneEstimateAttachedFiles } from "../../../models/estimate";

async function deleteAttachedFiles({ query: { id } }, res) {
  if (await deleteFile(id)) res.status(204).send();
  else res.status(404).send();
}

export default base().delete(deleteAttachedFiles);
