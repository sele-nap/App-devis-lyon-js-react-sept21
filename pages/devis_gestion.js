import Layout from "../components/Layout";
import { IoIosAddCircle } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import next from "next";

export default function QuoteManagement() {
  return (
    <Layout>
      <h1 className="border-double border-4 border-thrid text-black rounded">
        Liste des devis validés ou en attente de validation
      </h1>
      <h2 className="border-double border-4 border-thrid text-black rounded">
        Liste des devis en cours de création
      </h2>
      <IoIosAddCircle size={28} />
      <button className="bg-thrid hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full">
        CRÉER UN DEVIS
      </button>
      <FaCloudDownloadAlt size={28} />
      <button className="bg-thrid hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-full">
        TÉLÉCHARGER
      </button>
    </Layout>
  );
}
