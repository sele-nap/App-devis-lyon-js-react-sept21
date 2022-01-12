import base from "../../../middleware/commons";
import handleImageUpload from "../../../middleware/handleImageUpload";
import { createFiles, deleteFiles } from "../../../models/attachedFiles";
import {
  deleteOneEstimate,
  createAskEstimate,
  getEstimates,
  ValidateEstimate,
} from "../../../models/estimate";

<<<<<<< HEAD
=======
// import { requireAdmin } from "../../../middleware/requireAdmin";

import path from "path";

>>>>>>> dev
const handleGet = async (req, res) => {
  res.send(await getEstimates());
};

async function handlePost(req, res) {
  // console.log("receveided files:", req.files);

  const validationError = ValidateEstimate(req.body);
  // console.log(validationError);

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

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send("ok");
  else res.status(404).send("non supprimé");
}

export default base()
<<<<<<< HEAD
  .post(handleImageUpload.array("attachedFiles", 3), handlePost)
=======
  // .use(requireAdmin)
  .post(handleImageUpload.single("attachedFiles"), handlePost)
>>>>>>> dev
  .get(handleGet)
  .delete(handleDelete);
