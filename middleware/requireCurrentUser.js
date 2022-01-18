import { findByEmail } from "../models/user";
import { getSession } from "next-auth/react";

const requireCurrentUser = async (req, res, next) => {
  const session = await getSession({ req });
  req.currentUser = await findByEmail(session?.user?.email);
  // const sessionRole = session?.user?.role;
  // console.log(sessionRole);
  if (!req.currentUser) res.status(401).send("Unauthorized");
  else next();
};

export default requireCurrentUser;
