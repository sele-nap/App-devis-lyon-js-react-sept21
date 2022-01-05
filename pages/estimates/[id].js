import { getEstimates, getOneEstimate } from "../../models/estimate";
import Layout from "../../components/Layout";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import Link from "next/link";

export default function Estimate({
  estimate: { id, deadLine, additionalInformation, customer },
}) {
  return (
    <Layout>
      <div className="flex flex-col">
        <h2 className="text-center text-2xl m-12">
          Votre demande de devis n° {id}
        </h2>
        <div className="border-2 m-8 w-72 p-2 rounded-md">
          <h2 className="text-center text-xl uppercase mb-4">
            Contact client{" "}
          </h2>

          <div className=" items-center flex flex-row">
            <AssignmentIndIcon className="m-2" />
            <p className="text-md mx-2 items-center p-1">
              {customer.firstname} {customer.lastname}
            </p>
          </div>

          <div className=" items-center flex">
            <BusinessIcon className="m-2" />
            <div>
              <p className="text-md mx-2 items-center p-1">
                {customer.address1}{" "}
              </p>
              <p className="text-md mx-2 items-center">
                {customer.zipCode} {customer.city}
              </p>
            </div>
          </div>
          <div className=" items-center flex flex-row">
            <AlternateEmailIcon className="m-2" />
            <p className="text-md mx-2 items-center p-1">{customer.email}</p>
          </div>

          <div className=" items-center flex flex-row">
            <PhoneIcon className="m-2" />
            <p className="text-md mx-2 items-center p-1">{customer.phone}</p>
          </div>
        </div>

        <div className="flex flex-row justify-around">
          <div className="border-2 m-8 w-72 p-2 rounded-md flex ">
            <h2 className="text-center text-md uppercase mb-4">
              date de la demande
            </h2>
            <p> {JSON.stringify(deadLine)} </p>
          </div>
          <div className="border-2 m-8 w-72 p-2 rounded-md flex ">
            <h2 className="text-center text-md uppercase mb-4">
              date d' éxécution
            </h2>
            <p> {JSON.stringify(deadLine)} </p>
          </div>
        </div>
      </div>
      <div className="rounded-md justify-center items-center flex flex-col">
        <div className="border-2 p-6">
          <h2 className="text-center text-xl uppercase mb-4">
            Rappel de la demande{" "}
          </h2>
          <p> {additionalInformation} </p>
        </div>

        <div className="border-2 p-6 mt-2">
          <h2 className="text-center text-xl uppercase mb-4">réponse</h2>
          <input
            type="text"
            placeholder="Veuillez apporter une réponse à ce devis"
          />
        </div>
      </div>

      <div className="mt-10">
        <Link href="/estimates" passHref>
          <div className="flex justify-center items-center cursor-pointer">
            <BorderAllIcon />
            <span className="ml-2">Synthèse des devis</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const estimates = await getEstimates();
  return {
    paths: estimates.map((e) => {
      return { params: { id: e.id.toString() } };
    }),
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const estimate = await getOneEstimate(ctx.params.id);
  return {
    props: { estimate },
    revalidate: 10,
  };
}
