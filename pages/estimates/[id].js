import { getEstimates, getOneEstimate } from "../../models/estimate";
import Layout from "../../components/Layout";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Link from "next/link";

import moment from "moment";

export default function Estimate({
  estimate: { id, deadLine, additionalInformation, customer },
}) {
  return (
    <Layout>
      <div className="flex flex-col">
        <h2 className="text-center text-2xl  uppercase m-12">
          Demande de devis n° {id}
        </h2>
        <div className="flex  justify-around">
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
                <p className="text-md mx-2 items-center p-1">
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

          <div className="">
            <div className="rounded-xl m-20 justify-center items-center flex flex-col">
              <h2 className="text-center text-xl uppercase">
                date de la demande
              </h2>
              <p className="mb-3">
                {" "}
                {moment(deadLine).format(" DD / MM / YYYY")}
              </p>
              <h2 className="text-center text-xl uppercase">
                date d{`'`}éxécution
              </h2>
              <p> {moment(deadLine).format(" DD / MM / YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl m-20 justify-center items-center flex flex-col">
          <div className="border-2 rounded-xl w-full mb-10 p-8">
            <h2 className="text-center text-xl uppercase mb-4">
              Rappel de la demande{" "}
            </h2>
            <p> {additionalInformation} </p>
          </div>

          <div className="border-2 rounded-xl w-full mb-10 p-8">
            <h2 className="text-center text-xl uppercase mb-4">
              réponse de l{`'`}administrateur
            </h2>
            <input
              type="text"
              placeholder="Veuillez apporter une réponse à ce devis"
              className="w-full h-36"
            />
          </div>
        </div>

        <div className="flex flex-row justify-around">
          <div className="py-2 px-4 w-48 hover:bg-yellow-300 bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10">
            <Link href="/estimates" passHref>
              <div className="flex justify-center items-center cursor-pointer">
                <BorderAllIcon />
                <span className="ml-2"> Synthèse des devis</span>
              </div>
            </Link>
          </div>

          <div className="py-2 px-4 w-48 hover:bg-green-300 bg-green-400 focus:ring-green-600 focus:ring-offset-red-200 text-gray-900 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10">
            <Link href="/estimates" passHref>
              <div className="flex justify-center items-center cursor-pointer">
                <PictureAsPdfIcon />
                <span className="ml-2"> Générer le devis au format PDF</span>
              </div>
            </Link>
          </div>

          <div className="py-2 px-4 w-48 hover:bg-red-300 bg-red-400 focus:ring-red-600 focus:ring-offset-red-200 text-gray-900 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10">
            <Link href="/estimates" passHref>
              <div className="flex justify-center items-center cursor-pointer">
                <DeleteForeverIcon />
                <span className="ml-2"> Supprimer le devis</span>
              </div>
            </Link>
          </div>
        </div>
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
