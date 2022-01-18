import {
  ValidateEstimate,
  updateAskEstimate,
  getOneEstimate,
  deleteOneEstimate,
  getEstimate,
  createFiles,
  getOneEstimateAttachedFiles,
} from "../../../models/estimate";
import base from "../../../middleware/commons";
import mailer from "../../../mailer";
import requireCurrentUser from "../../../middleware/requireCurrentUser";
import handleImageUpload from "../../../middleware/handleImageUpload";
import estimate from ".";
// import { requireAdmin } from "../../../middleware/requireAdmin";

async function handlePatch({ query: { id }, body, files, currentUser }, res) {
  const validationErrors = ValidateEstimate(body, true);
  console.log(validationErrors);
  if (validationErrors) return res.status(422).send(validationErrors);
  const updated = await updateAskEstimate(id, body);
  console.log(updated);

  if (files && files?.length) {
    const filesSave = files.map((file) =>
      createFiles({
        name: file.filename,
        estimate: { connect: { id: parseInt(id) } },
        url: file.path,
        creator: currentUser.role,
      })
    );
    await Promise.all(filesSave);
  }

  if (updated) res.status(200).send(updated);
  else res.status(404).send();
}
async function sendMail({ query: { id } }, req, res) {
  const { validationCode, customer } = await getEstimate(id);
  const mailBody = `Rendez-vous sur ce lien pour valider votre demande de devis : ${process.env.HOST}/validateEstimate?validationCode=${validationCode} La validation de ce mail vaudra pour signature de votre part et engage le début de réalisation des travaux.`;
  await mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: customer.email,
    subject: `Validation de votre devis`,
    text: mailBody,
    html: mailBody,
  });
}

async function handleGet({ query: { id } }, res) {
  const estimate = await getOneEstimateAttachedFiles(id);
  if (estimate) res.send(estimate);
  else res.status(404).send();
}

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send();
  else res.status(404).send();
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default base()
  .use(requireCurrentUser)
  .post(sendMail)
  .get(handleGet)
  .patch(handleImageUpload.array("attachedFiles", 3), handlePatch)
  .delete(handleDelete);
