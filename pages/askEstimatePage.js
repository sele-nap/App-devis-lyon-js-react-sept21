import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import Layout from "../components/Layout";
import { useRef, useState } from "react";
import ClientLayout from "../components/ClientLayout";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import { IoIosAttach } from "react-icons/io";

function Estimate() {
  const router = useRouter();
  const {
    formState: { errors },
  } = useForm();

  //UPLOAD//
  const [attachedFiles, setAttachedFiles] = useState([]);
  const attachedFilesRef = useRef(null);

  const handleAttachedFilesClick = (e) => {
    attachedFilesRef.current.click();
    e.preventDefault();
  };
  const handleAttachedFilesSelection = (e) => {
    const fileList = Array.from(e.target.files);

    fileList.forEach((file) =>
      setAttachedFiles((attachedFiles) => [...attachedFiles, file.name])
    );
  };

  const [numberEstimate, setNumberEstimate] = useState("");

  const resetForm = () => {
    additionalInformation.value = "";
    deadLine.value = "";
    setAttachedFiles([]);
  };

  const customErrors = () => {
    const globalError = "votre demande de devis n'a pas été envoyée";
    if (additionalInformation.value === "") {
      return "Le champ message n'a pas été rempli, " + globalError;
    }
    if (deadLine.value === "") {
      return "Le champ date n'a pas été rempli, " + globalError;
    }
    return globalError;
  };

  const onSubmit = async (status) => {
    const dataFiles = new FormData();

    for (let i = 0; i < attachedFilesRef.current.files.length; i++) {
      if (attachedFilesRef.current.files[i]) {
        dataFiles.append("attachedFiles", attachedFilesRef.current.files[i]);
      }
    }
    dataFiles.append("status", status);
    dataFiles.append("deadLine", deadLine.value);
    dataFiles.append("additionalInformation", additionalInformation.value);

    axios

      .post("/api/estimate", dataFiles)
      .then((res) => {
        setNumberEstimate("n°" + res.data?.id);
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            res.data.status === "TO_DO"
              ? `Votre demande de devis ${res.data?.id} a été envoyée `
              : "Votre demande de devis a été enregistrée, vous pourrez la modifier ultérieurement",
          showConfirmButton: false,
          timer: 2500,
        });
        resetForm();
        setTimeout(() => {
          router.push("/estimates"), 2000;
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: globalError(),
          showConfirmButton: false,
          timer: 2500,
        });
      });
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
      confirmButtonText: "Oui",
    }).then((result) => {
      if (result.isConfirmed) {
        setAttachedFiles(attachedFiles.splice(1, 3));
        Swal.fire(
          "Supprimé",
          "Votre pièce jointe à bien été supprimée",
          "success"
        );
      }
    });
  };
  //INPUT DATE//
  const date2 = new Date();
  const date = format(date2, "yyyy-MM-dd");

  return (
    <div>
      <Layout title="votre demande de devis">
        <ClientLayout>
          <div className=" flex justify-center"></div>

          <h2 className="text-center mb-10">
            Cette demande ne vaut pas pour devis
          </h2>

          <form>
            <div className="flex align items-center flex-col">
              <textarea
                placeholder="Votre message"
                className="appearance-none block w-4/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="additionalInformation"
                name="additionalInformation"
                type="text"
                require="require"
              />
              {errors.additionalInformation && (
                <span className="text-xs">
                  {" "}
                  {errors.additionalInformation.message}
                </span>
              )}
              <label className="mt-5"> Pour quelle date? :</label>

              <input
                type="date"
                placeholder="date"
                min={date}
                id="deadLine"
                className="mt-5 appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 
                 "
              />
              {errors.deadLine && (
                <span className="text-xs"> {errors.deadLine.message}</span>
              )}
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={handleAttachedFilesClick}
                type="submit"
                className="flex flex-row justify-center m-10 shadow w-64 h-14 bg-secondary hover:bg-third focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
              >
                Ajouter pièces jointes <br />3 maximums
                <IoIosAttach size={26} className="ml-4 mt-2" />
              </button>
              <input
                className="hidden"
                type="file"
                multiple={true}
                id="attachedFiles"
                accept="image/bmp,image/jpeg,image/jpg,image/png,image/txt,image/doc,image/docx,image/xls,image/xslx,image/odt,image/ods,image/pdf"
                ref={attachedFilesRef}
                onChange={handleAttachedFilesSelection}
              />

              <div className="m-20">
                {attachedFiles.map((data, index) => {
                  if (attachedFiles.length <= 3) {
                    return (
                      <ul key={index}>
                        <li>
                          {data}{" "}
                          <DeleteForeverIcon
                            className="ml-3"
                            onClick={handleClickDelete}
                          />
                        </li>
                      </ul>
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
                  return (
                    <ul key={index}>
                      <li>
                        {data}
                        <DeleteForeverIcon
                          className="ml-3"
                          onClick={handleClickDelete}
                        />
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div className=" flex flex-wrap justify-around  ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit("TO_DO");
                }}
                className="shadow w-68 h-12 bg-yellow-400 hover:bg-yellow-700 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
              >
                Soumettre ma demande <SendIcon className="ml-5 " />
              </button>

              <button
                className=" pt-3 flex flex-row around shadow w-68 h-12 bg-yellow-400 hover:bg-yellow-700 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
                name="Save"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit("DRAFT");
                }}
              >
                Enregistrer ma demande <br />
                <SaveIcon className="ml-3" />
              </button>
            </div>
          </form>
        </ClientLayout>
      </Layout>
    </div>
  );
}

export default Estimate;
