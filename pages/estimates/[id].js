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
import CtaButton from "../../components/CtaButton";
import moment from "moment";
import CTAbtn from "../../components/CTAbtn";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import React from "react";
import Logo from "../../public/Img/LogoSansBlabla.png";
import Image from "next/image";

const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "cm",
  format: "A2",
};

export default function Estimate({
  estimate: { id, deadLine, additionalInformation, customer, createDate },
}) {
  return (
    <Layout>
      <div className="flex flex-col">
        <div ref={ref}>
          <div className="flex justify-end items-center  mt-10 mx-24">
            <div className="flex">
              <Image src={Logo} width={"70px"} height={"70px"} />
            </div>
            <div className="mx-4">
              <h1 className="text-xl uppercase">
                {" "}
                Société des décorations lyonnaises
              </h1>
              <div className="text-gray-700 italic text-sm">
                <p> Adresse Lambda - 69000 LYON </p>
                <p> Contact : contact@lyon-decoration.com</p>
                <p>Tel : 0123456789</p>
              </div>
            </div>
          </div>
          <h2 className="text-center text-2xl  uppercase m-4">Devis n° {id}</h2>
          <div className="flex  justify-around">
            <div className="m-8 w-72 p-2 rounded-md">
              <h2 className="text-center text-xl uppercase mb-4">
                Coordonnées du client
              </h2>

              <div className=" items-center flex flex-row">
                <AssignmentIndIcon className="m-2" />
                <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                  {customer.firstname} {customer.lastname}
                </p>
              </div>

              <div className=" items-center flex">
                <BusinessIcon className="m-2" />
                <div>
                  <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                    {customer.address1}{" "}
                  </p>
                  <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                    {customer.zipCode} {customer.city}
                  </p>
                </div>
              </div>
              <div className=" items-center flex flex-row">
                <AlternateEmailIcon className="m-2" />
                <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                  {customer.email}
                </p>
              </div>

              <div className=" items-center flex flex-row">
                <PhoneIcon className="m-2" />
                <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                  {customer.phone}
                </p>
              </div>
            </div>

            <div className="rounded-xl m-20 justify-center items-center flex flex-col">
              <h2 className="text-center text-lg uppercase">
                date de la demande
              </h2>
              <p className="mb-3 text-gray-700 ">
                {moment(createDate).format(" DD / MM / YYYY")}
              </p>
              <h2 className="text-center text-lg uppercase">
                date d{`'`}éxécution
              </h2>
              <p className="mb-3 text-gray-700 ">
                {moment(deadLine).format(" DD / MM / YYYY")}
              </p>
            </div>
          </div>
          <div className="rounded-xl mx-20 ml-20 justify-center items-center flex flex-col">
            <div className=" w-full mb-10 p-8">
              <h2 className="text-center text-xl uppercase mb-4">
                Rappel de la demande{" "}
              </h2>
              <p className="italic ml-24 text-gray-700 ">
                {" "}
                {additionalInformation}{" "}
              </p>
            </div>

            <div className="border-2 rounded-xl w-full mb-10 p-8">
              <h2 className="text-center text-xl uppercase mb-4">
                Proposition de l{`'`}administrateur
              </h2>
              <input
                type="text"
                placeholder="Veuillez apporter une réponse à ce devis"
                className="w-full h-36"
              />
            </div>

            <div>
              <p className="text-gray-700 text-sm italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed felis vestibulum, iaculis eros sit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around mt-20">
          <div className="py-2 px-4 w-48 hover:bg-yellow-300 bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10">
            <Link href="/estimates" passHref>
              <CtaButton
                // action={Download}
                title="Télécharger"
                type="submit"
                icon={<BorderAllIcon />}
              />
            </Link>
          </div>
          <Pdf targetRef={ref} filename="Devis.pdf" options={options}>
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
          <div className="py-2 px-4 w-48 hover:bg-green-300 bg-green-400 focus:ring-green-600 focus:ring-offset-red-200 text-gray-900 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10">
            <Link href="/estimates" passHref>
              <div className="flex justify-center items-center cursor-pointer">
                <PictureAsPdfIcon />
                <span className="ml-2"> Générer le devis au format PDF</span>
              </div>
            </Link>
          </div>

          <CTAbtn title="Supprimer" link="/estimates" />
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
