import Link from "next/link";
import Layout from "../components/Layout";
import { confirmEstimate } from "../models/estimate";
import BackupTableIcon from "@mui/icons-material/BackupTable";

export default function validationCode({ verified }) {
  return (
    <Layout title="Validation de votre devis">
      <div className="flex justify-center">
        <div className="flex justify-center m-10 flex-col text-center text-xl border p-10 w-2/5 rounded-3xl shadow-xl text-gray-800 items-center">
          {verified ? (
            <h1> Votre devis est désormais validé ✔️</h1>
          ) : (
            <h1> Votre devis a déjà été validé </h1>
          )}

          <div>
            <Link href="/estimates">
              <a className="mt-6 inline-block text-sm px-4 py-2 leading-none rounded">
                <BackupTableIcon />
                <span className="ml-4">Mes demandes de devis </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query);
  const verified = await confirmEstimate(query?.validationCode);
  return {
    props: {
      verified,
    },
  };
}
