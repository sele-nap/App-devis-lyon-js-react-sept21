// import { getEstimates, getOneEstimate } from "../../models/estimate";
import Layout from "../../../components/Layout";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SaveIcon from "@mui/icons-material/Save";
import Link from "next/link";
import CtaButton from "../../../components/CtaButton";
import moment from "moment";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import React from "react";
import Logo from "../../../public/Img/LogoSansBlabla.png";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Swal from "sweetalert2";

//  -------------------------- FORMAT PDF --------------------------
const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "cm",
  format: "A2",
};

export default function Estimate() {
  //  -------------------------- STATE FOR UPDATE --------------------------
  const [status, setStatus] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [validationDate, setValidationDate] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [adminCommnent, setAdminCommnent] = useState("");
  const [customer, setCustomer] = useState("");

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const isUpdate = id !== "new";

  const saveEstimate = async () => {
    const formValues = {
      status,
      validationDate,
      additionalInformation,
      deadLine,
      createDate,
      adminCommnent,
      customer,
    };
    try {
      if (isUpdate) {
        await axios.patch(`/api/estimate/${id}`, formValues).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profil mis à jour",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      } else {
        await axios.post(`/api/estimate/${id}`, formValues);
      }
      router.push("/estimates");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id && isUpdate) {
      axios
        .get(`/api/estimate/${id}`)
        .then(
          ({
            data: {
              status,
              validationDate,
              deadLine,
              additionalInformation,
              createDate,
              adminCommnent,
              customer,
            },
          }) => {
            setStatus(status);
            setDeadLine(deadLine);
            setValidationDate(validationDate);
            setAdditionalInformation(additionalInformation);
            setCreateDate(createDate);
            setAdminCommnent(adminCommnent);
            setCustomer(customer);
          }
        );
    }
  }, [isUpdate, id]);
  return (
    <Layout>
      <div className="flex flex-col">
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

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await saveEstimate();
          }}
        >
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
                {moment(createDate).format(" DD / MM / YYYY")}{" "}
              </p>
              <h2 className="text-center text-lg uppercase">
                date d{`'`}éxécution
              </h2>
              <p className="mb-3 text-gray-700 ">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="adminCommnent"
                  name="adminCommnent"
                  type="text"
                  value={moment(deadLine).format(" DD / MM / YYYY")}
                  onChange={(e) =>
                    setDeadLine(moment(deadLine).format(" DD / MM / YYYY"))
                  }
                />
              </p>
            </div>
          </div>
          <div className="border rounded-xl mx-20 ml-20 justify-center items-center flex flex-col">
            <div className=" w-full mb-10 p-8">
              <h2 className="text-center text-xl uppercase mb-4">
                Rappel de la demande{" "}
              </h2>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="additionalInformation"
                name="additionalInformation"
                placeholder="Demande apportée par l'admin"
                type="text"
                value={additionalInformation}
                onChange={(e) => setAdditionalInformation(e.target.value)}
              />{" "}
            </div>

            <div className=" w-full mb-10 p-8">
              <h2 className="text-center text-xl uppercase mb-4">
                Proposition de l{`'`}administrateur
              </h2>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="adminCommnent"
                name="adminCommnent"
                placeholder="Reponse apportée par l'admin"
                type="text"
                value={adminCommnent}
                onChange={(e) => setAdminCommnent(e.target.value)}
              />
            </div>
          </div>
          <Link href="/estimates" passHref>
            <CtaButton
              // action={Download}
              title="Modifier le devis"
              type="submit"
              icon={<SaveIcon />}
            />
          </Link>
        </form>
      </div>
      <div className="flex flex-row justify-around mt-20"></div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const estimates = await getEstimates();
//   return {
//     paths: estimates.map((e) => {
//       return { params: { id: e.id.toString() } };
//     }),
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps(ctx) {
//   const estimate = await getOneEstimate(ctx.params.id);
//   return {
//     props: { estimate },
//     revalidate: 10,
//   };
// }
