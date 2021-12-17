import Layout from "../components/Layout";
import { IoIosAddCircle } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import next from "next";
import Swal from "sweetalert2";

export default function QuoteManagement() {
  const handleClick = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Votre devis a bien été créée !",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const Downloaad = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Votre devis a bien été téléchargé !",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Layout>
      <section className="bg-slate-50 text-md">
        <div className="flex justify-center items-center">
          <button className="border-2 border-third text-black rounded cursor-auto p-1 ">
            Liste des devis validés ou en attente de validation
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button className="border-2 border-third text-black rounded cursor-auto p-1">
            Liste des devis en cours de création
          </button>
        </div>
        <div className="flex justify-around items-center">
          <button
            className="py-2 px-4 bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 rounded-full cursor-pointer"
            onClick={handleClick}
          >
            <IoIosAddCircle size={20} />
            CRÉER UN DEVIS
          </button>

          <button
            className="py-2 px-4 bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 rounded-full cursor-pointer"
            onClick={Downloaad}
          >
            <FaCloudDownloadAlt size={20} />
            TÉLÉCHARGER
          </button>
        </div>
      </section>
    </Layout>
  );
}
