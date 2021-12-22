import Link from "next/link";
import Layout from "../components/Layout";
import { confirmEmail } from "../models/user";

export default function validationemail({ verified }) {
  return (
    <Layout>
      <div className="flex justify-center m-10 flex-col">
        {verified ? (
          <h1> Votre compte est désormais actif</h1>
        ) : (
          <h1> Votre compte a déjà été activé</h1>
        )}

        <div>
          <Link href="/login">
            <a className="mt-6 inline-block text-sm px-4 py-2 leading-none border rounded">
              Se connecter
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const verified = await confirmEmail(query?.emailVerificationCode);
  return {
    props: {
      verified,
    },
  };
}
