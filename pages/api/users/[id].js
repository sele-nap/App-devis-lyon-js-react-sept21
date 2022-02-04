import {
  validateUser,
  getOneUser,
  deleteOneUser,
  updateOneUser,
} from "../../../models/user";
import base from "../../../middleware/commons";
import requireCurrentUser from "../../../middleware/requireCurrentUser";

async function handlePatch({ query: { id }, body }, res) {
  const validationErrors = validateUser(body, true);
  if (validationErrors) return res.status(422).send(validationErrors);
  const updated = await updateOneUser(id, body);
  if (updated) res.status(200).send(updated);
  else res.status(404).send();
}

async function handleGet({ query: { id }, currentUser }, res) {
  const user = await getOneUser(id);
  if (user.id === currentUser.id || currentUser.role === "admin") {
    if (user) res.send(user);
    else res.status(404).send();
  } else {
    res.status(403).send();
  }
}

async function handleDelete({ query: { id } }, res) {
  if (await deleteOneUser(id)) res.status(204).send();
  else res.status(404).send();
}

export default base()
  .use(requireCurrentUser)
  .get(handleGet)
  .patch(handlePatch)
  .delete(handleDelete);
