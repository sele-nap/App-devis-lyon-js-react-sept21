import React from "react";
import ClientLayout from "../components/ClientLayout";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import Layout from "../components/Layout";
import { useRef, useState } from "react";

function estimate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  //UPLOAD//
  const [attachedFiles, setAttachedFiles] = useState([]);
  const attachedFilesRef = useRef(null);

  const handleAttachedFilesClick = (e) => {
    attachedFilesRef.current.click();
    e.preventDefault();
  };
  const handleAttachedFilesSelection = (e) => {
    console.log(e.target.files[0]);

    if (e.target.files[0])
      setAttachedFiles(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (status) => {
    const dataFiles = new FormData();
    dataFiles.append("attachedFiles", attachedFilesRef.current.files[0]);
    dataFiles.append("status", status);
    dataFiles.append("deadLine", deadLine.value);
    dataFiles.append("additionalInformation", additionalInformation.value);

    axios
      .post("/api/estimate/estimateApi", dataFiles)

      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Votre demande de devis a été envoyé",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Votre demande de devis n'a pas été envoyé",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const handleClickDelete = (e) => {
    Swal.fire({
      title: "Etes vous sûr de vouloir supprimer votre pièce jointe?",
      text: "Cette action est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DAB455",
      cancelButtonColor: "#ECE6E6",
      confirmButtonText: "oui, supprimé",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Supprimé",
          "Votre pièce jointe à bien été supprimé",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <ClientLayout>
        <Layout>
          <div className=" flex justify-center">
            <h1 className="bg-third h-25 w-1/2 text-center flex justify-center rounded-3xl m-20 p-3 lg: w-50">
              Votre demande de devis
            </h1>
          </div>
          <form>
            <div className="flex align items-center flex-col">
              <textarea
                placeholder="Votre message"
                className="appearance-none block w-4/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="additionalInformation"
                name="additionalInformation"
                type="text"
                {...register("additionalInformation", {
                  required: " ❌ Champs obligatoire ",
                })}
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
                id="deadLine"
                className="mt-5  appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 lg: w-1/5 "
                {...register("deadLine", {
                  required: " ❌ Champs obligatoire ",
                })}
              />
              {errors.deadLine && (
                <span className="text-xs"> {errors.deadLine.message}</span>
              )}
            </div>

            <div className="flex flex-col justify-end bg-emerald-100 ">
              <button
                onClick={handleAttachedFilesClick}
                type="submit"
                className="bg-third w-1/2 h-15 flex justify-center rounded-3xl m-20 p-2 text-ml md:1/5 lg:w-1/4"
              >
                Ajouter pièces jointes <br />3 maximums
              </button>
              <input
                className="hidden"
                type="file"
                multiple="true"
                id="attachedFiles"
                accept="image/png, image/jpeg, image/gif"
                ref={attachedFilesRef}
                onChange={handleAttachedFilesSelection}
              ></input>
              <div className="flex flex-col">
                <div className="flex flex-row bg-green-600">
                  <input
                    value={attachedFiles}
                    className=" h-6 w-1/2"
                    {...register("attachedFiles")}
                  ></input>
                  <DeleteForeverIcon
                    className="ml-3"
                    onClick={handleClickDelete}
                  />
                  {/* <input
                    className="bg-blue-100 h-6 w-1/2"
                    {...register("attachedFiles")}
                  ></input>
                  <DeleteForeverIcon
                    className="ml-3"
                    onClick={handleClickDelete}
                  />
                  <input
                    className="bg-blue-100 h-6 w-1/2"
                    {...register("attachedFiles")}
                  ></input>
                  <DeleteForeverIcon
                    className="ml-3"
                    onClick={handleClickDelete}
                  /> */}
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit("TO_DO");
                }}
                className="bg-third  text-center w-1/3 m-15 lg:w-1/4 h-10 flex justify-center rounded-3xl m-20 p-2 text-xl "
              >
                Soumettre un devis <SendIcon className="ml-10 " />
              </button>

              <button
                className="bg-third w-2/5 h-10 flex justify-center rounded-3xl m-20 p-2 text-ml"
                name="Save"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit("DRAFT");
                }}
              >
                Enregistrer ma demande pour continuer plus tard <br />
                <SaveIcon className="ml-10" />
              </button>
            </div>
          </form>
        </Layout>
      </ClientLayout>
    </div>
  );
}

export default estimate;
