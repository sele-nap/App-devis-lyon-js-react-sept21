import requireCurrentUser from "../../middleware/requireCurrentUser";
import { getSafeAttributes } from "../../models/user";
import base from "../../middleware/commons";

async function handleGet(req, res) {
  res.send(getSafeAttributes(req.currentUser));
}

export default base().use(requireCurrentUser).get(handleGet);
