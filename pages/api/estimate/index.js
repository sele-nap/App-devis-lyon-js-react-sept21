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
import { data } from "autoprefixer";
import path from "path";

const handleGet = async (req, res) => {
  res.send(await getEstimates());
};
<<<<<<< HEAD:pages/api/estimate/estimateApi.js
async function handlePost(req, res) {
  console.log("receveided file:", req.file);

=======

async function handlerPost(req, res) {
>>>>>>> dev:pages/api/estimate/index.js
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
<<<<<<< HEAD:pages/api/estimate/estimateApi.js
export default base()
  .post(handleImageUpload.single("attachedFiles"), handlePost)
  .get(handleGet);

export const config = {
  api: {
    bodyParser: false,
  },
};
=======

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send();
  else res.status(404).send();
}


export default base().post(handlerPost).get(handleGet).delete(handleDelete);;
>>>>>>> dev:pages/api/estimate/index.js
