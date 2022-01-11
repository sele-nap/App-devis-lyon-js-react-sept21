import base from "../../../middleware/commons";
import handleImageUpload from "../../../middleware/handleImageUpload";
import sharp from "sharp";
import {
  deleteOneEstimate,
  createAskEstimate,
  getEstimates,
  ValidateEstimate,
  createFiles,
  deleteAttachedFiles,
} from "../../../models/estimate";

import path from "path";

const handleGet = async (req, res) => {
  res.send(await getEstimates());
};

async function handlePost(req, res) {
  console.log("receveided files:", req.files);

  const validationError = ValidateEstimate(req.body);
  console.log(validationError);

  if (validationError) return res.status(422).send(validationError);
  const newEstimate = await createAskEstimate({
    ...req.body,
    customer: { connect: { id: 1 } },
  });
  if (req.files && req.files?.length) {
    //  const ext = path.extname(req.files.path);
    // const outputFilePath = `${req.files.path.replace(ext, "")}_thumb.webp`;
    const filesSave = req.files.map((file) =>
      createFiles({
        name: file.filename,
        estimate: { connect: { id: newEstimate.id } },
        url: file.path,
      })
    );
    await Promise.all(filesSave);
  }
  res.status(201).send(newEstimate);
}

// async function deleteAttachedFiles({ query: { id } }, res) {
//   if (await deleteAttachedFiles(id)) res.status(204).send();
//   else res.status(404).send();
// }

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  .post(handleImageUpload.array("attachedFiles", 3), handlePost)
  .get(handleGet)
  .delete(handleDelete, deleteAttachedFiles);
