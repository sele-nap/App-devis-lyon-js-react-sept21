import React from "react";
import ClientLayout from "../components/ClientLayout";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import Layout from "../components/Layout";

function estimate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    axios.post("./api/estimate", data).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Votre demande de devis a été envoyé",
        showConfirmButton: false,
        timer: 2500,
      }).catch;
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

  const handleClickSave = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title:
        "Votre demande de devis a été enregistré mais n'a pas été envoyé à l'administrateur",
      showConfirmButton: false,
      timer: 2500,
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex align items-center flex-col">
              <textarea
                placeholder="Votre message"
                className="appearance-none block w-4/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-10 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <label> Pour quand ? :</label>
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

            <div className="flex justify-center ">
              {" "}
              <button className="bg-third w-1/2 h-15 flex justify-center rounded-3xl m-20 p-2 text-ml md:1/5 lg:w-1/4">
                Ajouter pièces jointes <br />3 maximums
              </button>
            </div>
            <div className="">
              <ul>
                <li className="text-center ">
                  test.pdf{" "}
                  <DeleteForeverIcon
                    className="ml-3"
                    onClick={handleClickDelete}
                  />
                </li>
                <li className="text-center">
                  test.pdf <DeleteForeverIcon className="ml-3" />
                </li>

                <li className="text-center">
                  test.pdf <DeleteForeverIcon className="ml-3" />
                </li>
              </ul>
            </div>

            <div className="flex flex-row justify-between ">
              <button
                type="submit"
                className="bg-third  text-center w-1/3 m-15 lg:w-1/4 h-10 flex justify-center rounded-3xl m-20 p-2 text-xl "
              >
                Soumettre un devis{" "}
                <SendIcon className="ml-10 " type="submit" onClick={onSubmit} />
              </button>
              <button
                className="bg-third w-2/5 h-10 flex justify-center rounded-3xl m-20 p-2 text-ml"
                onClick={handleClickSave}
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
