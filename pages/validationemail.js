import Link from "next/link";
import Layout from "../components/Layout";
import { confirmEmail } from "../models/user";
import LoginIcon from "@mui/icons-material/Login";

export default function validationemail({ verified }) {
  return (
    <Layout title="Validation de votre email">
      <div className="flex justify-center">
        <div className="flex justify-center m-10 flex-col text-center text-xl border p-10 w-2/5 rounded-3xl shadow-xl text-gray-800 items-center">
          {verified ? (
            <h1> Votre compte a déjà été activé</h1>
          ) : (
            <h1> Votre compte est désormais actif</h1>
          )}

          <div>
            <Link href="/login">
              <a className="mt-6 inline-block text-sm px-4 py-2  leading-none">
                <LoginIcon />
                <span className="ml-4">Se connecter </span>
              </a>
            </Link>
          </div>
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
