// import { getEstimates, getOneEstimate } from "../../models/estimate";
import Layout from "../../components/Layout";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusinessIcon from "@mui/icons-material/Business";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Link from "next/link";
import moment from "moment";
import Router from "next/router";
import Pdf from "react-to-pdf";
import React from "react";
import Logo from "../../public/Img/LogoSansBlabla.png";
import Image from "next/image";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Swal from "sweetalert2";
// import EditEstimateArray from "../../components/editEstimateArray";
import AdminLayout from "../../components/AdminLayout";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ClientLayout from "../../components/ClientLayout";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
// import ToggleButtonToDo from "../../components/ToggleButtonToDo";
import { IoIosAttach } from "react-icons/io";

//  -------------------------- FORMAT PDF --------------------------
const ref = React.createRef();
const options = {
  orientation: "portrait",
  unit: "cm",
  format: "A2",
};

export default function Estimate(req) {
  const { currentUserIsAdmin } = useContext(CurrentUserContext);

  //  -------------------------- DELETE THE ESTIMATE --------------------------
  const deleteEstimate = async (id) => {
    if (confirm("Voulez vous vraiment supprimer ce devis définitivement ?")) {
      await axios.delete(`/api/estimate/${id}`);
      alert("devis bien supprimé");
      setEstimate((estimate) => estimate.filter((e) => e.id !== id));
    }

    return (
      <button type="button" onClick={() => router.back()}>
        Retour
      </button>
    );
  };
  const [estimate, setEstimate] = useState([]);

  const sendMail = async (id) => {
    if (
      confirm(
        "Voulez vous recevoir un mail avec un lien de validation, cette étape vaudra signature de votre part "
      )
    ) {
      axios.post(`/api/estimate/${id}`);
      alert("RDV maintenant dans votre boite mail pour activer ce lien");
    }
  };
  //  -------------------------- STATE FOR UPDATE --------------------------
  const [status, setStatus] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [validationDate, setValidationDate] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [adminComment, setAdminComment] = useState("");
  const [customer, setCustomer] = useState("");
  const [attachedFilesUpload, setAttachedFilesUpload] = useState([]);
  const [attachedFiles, setAttachedFiles] = useState([]);

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const isUpdate = id !== "new";

  // -----------------------------UPLOAD-------------------------------------

  const attachedFilesRef = useRef(null);

  const handleAttachedFilesClick = (e) => {
    attachedFilesRef.current.click();
    e.preventDefault();
  };
  const handleAttachedFilesSelection = (e) => {
    if (e.target.files[1])
      setAttachedFilesUpload(URL.createObjectURL(e.target.files[1]));

    const fileList = Array.from(e.target.files);
    console.log(fileList);
    if (fileList.length) {
      setAttachedFilesUpload(
        fileList.map((file) => {
          return file.name;
        })
      );
    }
  };
  const deleteAttachedFiles = async (id) => {
    if (
      confirm(
        "Voulez vous vraiment supprimer cette pièce jointe définitivement ?"
      )
    ) {
      await axios.delete(`/api/attachedFiles/${id}`);
      alert("Pièce jointe bien supprimé");
      setAttachedFiles((attachedFiles) =>
        attachedFiles.filter((e) => e.id !== id)
      );
    }
  };

  // Remove attached files//
  const handleClickDelete = () => {
    Swal.fire({
      title: "Etes vous sûr de vouloir supprimer votre pièce jointe?",
      text: "Cette action est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DAB455",
      cancelButtonColor: "#ECE6E6",
      confirmButtonText: "Oui, supprimé",
    }).then((result) => {
      if (result.isConfirmed) {
        setAttachedFilesUpload(attachedFilesUpload.splice(1, 3));
        Swal.fire(
          "Supprimé",
          "Votre pièce jointe à bien été supprimé",
          "success"
        );
      }
    });
  };

  const saveEstimate = async () => {
    const dataFiles = new FormData();
    for (let i = 0; i < attachedFilesRef.current.files.length; i++) {
      dataFiles.append("attachedFiles", attachedFilesRef.current.files[i]);
    }
    dataFiles.append("additionalInformation", additionalInformation.valueOf());
    dataFiles.append("adminComment", adminComment.valueOf());

    try {
      if (isUpdate) {
        console.log(dataFiles);
        await axios.patch(`/api/estimate/${id}`, dataFiles).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Devis mis à jour",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      } else {
        await axios.post(`/api/estimate/${id}`, dataFiles);
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
              adminComment,
              customer,
              attachedFiles,
            },
          }) => {
            setStatus(status);
            setDeadLine(deadLine);
            setValidationDate(validationDate);
            setAdditionalInformation(additionalInformation);
            setCreateDate(createDate);
            setAdminComment(adminComment);
            setCustomer(customer);
            setAttachedFiles(attachedFiles);
          }
        );
    }
  }, [isUpdate, id]);

  return (
    <Layout>
      <ClientLayout>
        <div className="flex flex-col">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await saveEstimate();
            }}
          >
            <div ref={ref}>
              <div className="flex justify-end items-center  mt-10 mx-72">
                <div className="flex">
                  <Image src={Logo} width={"70px"} height={"70px"} alt="logo" />
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
              <h2 className="text-center text-2xl  uppercase m-4">
                Devis
                {{ status } === "TO_DO"
                  ? " EN COURS DE REDACTION - "
                  : " BROUILLON  - "}
                n° {id}
              </h2>
              <div className="flex  justify-around">
                <div className="m-8 w-72 p-2 rounded-md">
                  <h2 className="text-center text-xl uppercase mb-4">
                    Coordonnées du client
                  </h2>

                  <div className=" items-center flex flex-row">
                    <AssignmentIndIcon className="m-2" />
                    <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                      {customer?.firstname} {customer?.lastname}
                    </p>
                  </div>

                  <div className=" items-center flex">
                    <BusinessIcon className="m-2" />
                    <div>
                      <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                        {customer?.address1}
                      </p>
                      <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                        {customer?.zipCode} {customer?.city}
                      </p>
                    </div>
                  </div>
                  <div className=" items-center flex flex-row">
                    <AlternateEmailIcon className="m-2" />
                    <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                      {customer?.email}
                    </p>
                  </div>

                  <div className=" items-center flex flex-row">
                    <PhoneIcon className="m-2" />
                    <p className="text-md mx-2 items-center p-1 text-gray-700 ">
                      {customer?.phone}
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
                    {moment(deadLine).format(" DD / MM / YYYY")}{" "}
                  </p>
                </div>
              </div>
              <div className="border rounded-xl mx-72 ml-20 justify-start items-center flex flex-col">
                <div className=" w-full mb-10 p-8">
                  <h2 className="text-center text-xl uppercase mb-4">
                    Rappel de la demande{" "}
                  </h2>
                  <input
                    className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    id="additionalInformation"
                    name="additionalInformation"
                    placeholder="Demande apportée"
                    type="text"
                    value={additionalInformation}
                    onChange={(e) => setAdditionalInformation(e.target.value)}
                  />{" "}
                  <div>
                    {" "}
                    {attachedFiles
                      .filter((attachedFile) => attachedFile.creator === null)
                      .map((a) => {
                        return (
                          <div key={a.id} className="m-5 text-center ">
                            <Link href={"/" + a.url}>
                              <a>{a.name}</a>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className=" w-full mb-10 p-8">
                  <h2 className="text-center text-xl uppercase mb-4">
                    Proposition de l{`'`}administrateur
                  </h2>
                  {currentUserIsAdmin ? (
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="adminComment"
                      name="adminComment"
                      type="text"
                      value={adminComment}
                      onChange={(e) => setAdminComment(e.target.value)}
                    />
                  ) : (
                    <div
                      className="appearance-none block w-full  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="adminComment"
                      name="adminComment"
                    >
                      {adminComment}
                    </div>
                  )}

                  <div>
                    {attachedFiles
                      .filter((attachedFile) => {
                        return attachedFile.creator === "admin";
                      })
                      .map((a) => {
                        return (
                          <div key={a.id} className="m-5 text-center ">
                            <Link href={"/" + a.url}>
                              <a>{a.name}</a>
                            </Link>
                            <DeleteForeverIcon
                              className="ml-3"
                              onClick={() => deleteAttachedFiles(a.id)}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="m-20 align-sub">
                  {attachedFilesUpload.map((data, index, url) => {
                    if (attachedFilesUpload.length <= 3) {
                      return (
                        <div>
                          <Link key={index} href={"/" + url}>
                            <a>{data} </a>
                          </Link>
                          <DeleteForeverIcon
                            className="ml-3"
                            onClick={handleClickDelete}
                          />
                        </div>
                      );
                    } else {
                      Swal.fire({
                        position: "center",
                        icon: "warning",
                        title: "3 pièces jointes maximum",
                        showConfirmButton: false,
                        timer: 2500,
                      });
                    }
                  })}
                </div>
              </div>

              <div className="flex  justify-center mt-20">
                <input
                  className="hidden"
                  type="file"
                  multiple={true}
                  id="attachedFiles"
                  accept="image/bmp,image/jpeg,image/jpg,image/png,image/txt,image/doc,image/docx,image/xls,image/xslx,image/odt,image/ods,image/pdf"
                  ref={attachedFilesRef}
                  onChange={handleAttachedFilesSelection}
                ></input>

                <button
                  type="submit"
                  className="ml-2 shadow w-64 h-12 bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
                >
                  <SaveIcon />
                  <span className="mx-2"> Sauvegarde </span>
                </button>
                <button
                  className="ml-2 pl-10 pt-3 flex flex-row shadow w-64 h-12 bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
                  onClick={handleAttachedFilesClick}
                  type="submit"
                >
                  <IoIosAttach size={26} />
                  <span className="mx-2 ">Pièces Jointes </span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-center mt-5"></div>
        <div className="mt-10 flex justify-center">
          <Link href="/estimates" passHref>
            <button className="ml-2 shadow w-64 h-12 bg-gray-400 hover:bg-gray-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
              <ArrowBackIcon />
              <span className="mx-2"> Mes devis </span>
            </button>
          </Link>

          {adminComment && (
            <button
              onClick={() => sendMail(id)}
              className="ml-2  shadow w-64 h-12 bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
            >
              <span>
                <CheckCircleOutlineIcon /> Validation du devis
              </span>
            </button>
          )}
          <div className="ml-2  pt-3 shadow w-64 h-12 bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
            <Pdf targetRef={ref} filename="Devis.pdf" options={options}>
              {({ toPdf }) => (
                <button className="font-bold" onClick={toPdf}>
                  <PictureAsPdfIcon />
                  <span className="mx-2"> Télécharger en PDF </span>
                </button>
              )}
            </Pdf>
          </div>

          <button
            className="ml-2 shadow w-64 h-12 bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
            onClick={() => deleteEstimate(id)}
          >
            <DeleteForeverIcon />
            <span className="mx-2"> Suppression </span>
          </button>
        </div>

        <div className="flex flex-row justify-around mt-20"></div>
      </ClientLayout>
    </Layout>
  );
}
