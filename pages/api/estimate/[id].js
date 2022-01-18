import {
  ValidateEstimate,
  updateAskEstimate,
  getOneEstimate,
  deleteOneEstimate,
  getEstimate,
} from "../../../models/estimate";
import base from "../../../middleware/commons";
import mailer from "../../../mailer";
import requireCurrentUser from "../../../middleware/requireCurrentUser";

// import { requireAdmin } from "../../../middleware/requireAdmin";

async function handlePatch({ query: { id }, body }, res) {
  const validationErrors = ValidateEstimate(body, true);
  console.log(validationErrors);
  if (validationErrors) return res.status(422).send(validationErrors);
  const updated = await updateAskEstimate(id, body);
  console.log(updated);
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
  const estimate = await getOneEstimate(id);
  if (estimate) res.send(estimate);
  else res.status(404).send();
}

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneEstimate(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  .use(requireCurrentUser)
  .post(sendMail)
  .get(handleGet)
  .patch(handlePatch)
  .delete(handleDelete);
