import {
  ValidateEstimate,
  updateAskEstimate,
  getOneEstimate,
  deleteOneEstimate,
  getEstimate,
  createFile,
  getOneEstimateAttachedFiles,
} from "../../../models/estimate";
import base from "../../../middleware/commons";
import mailer from "../../../mailer";
import requireCurrentUser from "../../../middleware/requireCurrentUser";
import handleImageUpload from "../../../middleware/handleImageUpload";

async function handlePatch(req, res) {
  const {
    query: { id },
    body,
    files,
    currentUser,
  } = req;

  const validationErrors = ValidateEstimate(body, true);
  console.log(validationErrors);
  if (validationErrors) return res.status(422).send(validationErrors);
  const updated = await updateAskEstimate(id, body);
  console.log(body);

  if (files && files?.length) {
    const filesSave = files.map((file) =>
      createFile({
        name: file.filename,
        estimate: { connect: { id: parseInt(id) } },
        url: file.path.replace("public/", ""),
        creator: currentUser.role,
      })
    );
    await Promise.all(filesSave);
  }

  if (updated) res.status(200).send(updated);
  else res.status(404).send();
}

async function sendMail({ query: { id } }, req, res) {
  const { validationCode, customer, status } = await getEstimate(id);

  console.log(status);
  const mailBody = `Rendez-vous sur ce lien pour valider votre demande de devis : ${process.env.HOST}/validateEstimate?validationCode=${validationCode} La validation de ce mail vaudra pour signature de votre part et engage le début de réalisation des travaux.`;
  await mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: customer.email,
    subject: `Validation de votre devis`,
    text: mailBody,
    html: mailBody,
  });

  const mailBodyForAdmin = `Un devis est en attente de validation chez votre client vous serez notifié par mail quand ce dernier aura été approuvé.`;
  await mailer.sendMail({
    from: process.env.MAILER_FROM,
    to: process.env.MAILER_FROM,
    subject: `Un devis a été mis en attente de validation`,
    text: mailBodyForAdmin,
    html: mailBodyForAdmin,
  });
}

async function handleGet({ query: { id }, currentUser }, res) {
  const { customer } = await getEstimate(id);

  const estimate = await getOneEstimateAttachedFiles(id);
  if (customer.email === currentUser.email || currentUser.role === "admin") {
    if (estimate) res.send(estimate);
    else res.status(404).send();
  } else {
    res.status(403).send();
  }
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
