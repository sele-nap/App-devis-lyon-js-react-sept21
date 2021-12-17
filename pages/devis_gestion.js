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
        <h1 className="border-double border-4 border-thrid text-black rounded place-items-center">
          Liste des devis validés ou en attente de validation
        </h1>
        <h2 className="border-double border-4 border-thrid text-black rounded place-items-center">
          Liste des devis en cours de création
        </h2>

        <button
          className="bg-thrid hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full cursor-pointer"
          onClick={handleClick}
        >
          <IoIosAddCircle size={28} />
          CRÉER UN DEVIS
        </button>

        <button
          className="bg-thrid hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full cursor-pointer"
          onClick={Downloaad}
        >
          <FaCloudDownloadAlt size={28} />
          TÉLÉCHARGER
        </button>
      </section>
    </Layout>
  );
}
