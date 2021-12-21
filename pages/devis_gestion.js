import Layout from "../components/Layout";
import { IoIosAddCircle } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import next from "next";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Link from "next/link";

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

  const [devis, setDevis] = useState();
  const [createDevis, setCreateDevis] = useState();

  useEffect(() => {
    axios.get("/api/devis").then((res) => setDevis(res.data));
  }, []);

  useEffect(() => {
    axios.get("/api/CreationDevis").then((res) => setCreateDevis(res.data));
  }, []);

  return (
    <Layout>
      <section className="bg-slate-50 text-md">
        {/* ___________ VALID QUOTATION / WAITING FOR VALIDATION  ___________*/}
        <div className="flex justify-center items-center">
          <button className="border-2 border-third text-black rounded cursor-auto p-1 ">
            Liste des devis validés ou en attente de validation
          </button>

          {!devis && <p>En chargement...</p>}
          {devis?.length === 0 && <p>Pas de devis actuellement</p>}
          {devis && devis.length !== 0 && (
            <table className="table-auto mt-6 mb-6">
              <tbody className="border-t">
                {projects.map(({ id, name, date, validation }) => (
                  <tr className="border-b" key={id}>
                    <td className="text-lg p-3 font-bold">{name}</td>
                    <td className="text-lg p-3 font-bold">{date}</td>
                    <td className="text-lg p-3 font-bold">{validation}</td>
                    <td className="pt-3 pb-3"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ___________ QUOTATION IN THE PROCESS OF CREATION  ___________*/}
        <div className="flex justify-center items-center">
          <button className="border-2 border-third text-black rounded cursor-auto p-1">
            Liste des devis en cours de création
          </button>

          {!createDevis && <p>En chargement...</p>}
          {createDevis?.length === 0 && <p>Pas de devis actuellement</p>}
          {createDevis && createDevis.length !== 0 && (
            <table className="table-auto mt-6 mb-6">
              <tbody className="border-t">
                {createDevis.map(({ id, name, date, validation }) => (
                  <tr className="border-b" key={id}>
                    <td className="text-lg p-3 font-bold">{name}</td>
                    <td className="text-lg p-3 font-bold">{date}</td>
                    <td className="text-lg p-3 font-bold">{validation}</td>
                    <td className="pt-3 pb-3"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ___________ CREATE A QUOTATION  ___________*/}
        <div className="flex justify-around items-center">
          <Link passHref href="/admin/devis/edit/new">
            <button
              className="py-2 px-4 bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 rounded-full cursor-pointer"
              type="submit"
              onClick={handleClick}
            >
              <IoIosAddCircle size={20} />
              CRÉER UN DEVIS
            </button>
          </Link>

          {/* ___________ DOWNLOAD  ___________*/}
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
