import base from "../../../middleware/commons";
import handleImageUpload from "../../../middleware/handleImageUpload";
import sharp from "sharp";
import {
  deleteOneEstimate,
  createAskEstimate,
  getEstimates,
  ValidateEstimate,
  createFiles,
} from "../../../models/estimate";

import path from "path";

const handleGet = async (req, res) => {
  res.send(await getEstimates());
};
async function handlePost(req, res) {
  console.log("receveided file:", req.file);

  const validationError = ValidateEstimate(req.body);
  console.log(validationError);

  if (validationError) return res.status(422).send(validationError);
  const newEstimate = await createAskEstimate({
    ...req.body,
    customer: { connect: { id: 1 } },
  });
  if (req.file && req.file?.path) {
    const ext = path.extname(req.file.path);
    const outputFilePath = `${req.file.path.replace(ext, "")}_thumb.webp`;
    await createFiles({
      name: req.file.filename,
      estimate: { connect: { id: newEstimate.id } },
    });
    // await sharp(req.file.buffer)
    //   .resize(250, 250, "contain")
    //   .webp({ quality: 85 })
    //   .toFile(outputFilePath);
  }

  res.status(201).send(newEstimate);
}

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
  .use(requireAdmin)
  .post(handleImageUpload.single("attachedFiles"), handlePost)
  .get(handleGet)
  .delete(handleDelete);
