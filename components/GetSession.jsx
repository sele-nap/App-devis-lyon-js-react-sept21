import Layout from "./Layout";
import { useSession } from "next-auth/react";
import next from "next";

export default function GetSession() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <>{session.user.id}</>;
  }
  return <Layout>Mentions légales</Layout>;
}
