import Layout from "../../components/Layout";
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

  const [estimate, setEstimate] = useState();
  // const [createDevis, setCreateDevis] = useState();

  useEffect(() => {
    axios.get("/api/estimate").then((res) => setEstimate(res.data));
  }, []);

  const deleteEstimate = async (id) => {
    if (confirm("Voulez vous vraiment supprimer ce projet définitivement ?")) {
      await axios.delete(`/api/estimate/${id}`);
      alert("projet bien supprimé");
      setEstimate((estimate) => estimate.filter((e) => e.id !== id));
    }
  };
  // useEffect(() => {
  //   axios.get("/api/CreationDevis").then((res) => setCreateDevis(res.data));
  // }, []);
  return (
    <Layout>
      <section className="bg-slate-50">
        {/* ___________ VALID QUOTATION / WAITING FOR VALIDATION  ___________*/}

        <div className="flex justify-center">
          <button className="mt-10  border-2 border-third text-black rounded cursor-auto p-1 ">
            Liste des devis validés ou en attente de validation
          </button>
        </div>

        {!estimate && <p>En chargement...</p>}
        {estimate?.length === 0 && <p>Pas de devis actuellement</p>}
        {estimate && estimate.length !== 0 && (
          <div className="table w-full p-2">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="border-r p-2"></th>
                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Numéro Client
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>
                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Nom
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Date de création devis
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Détails Devis
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Deadline Devis
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Editer
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>
                  <th className="p-2 border-r cursor-auto text-sm font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Validation
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="border-t">
                {estimate.map(
                  ({ id, userId, deadLine, additionalInformation }) => (
                    <tr className="w-full border" key={id}>
                      <td className="p-2 border-r">
                        <input type="checkbox" />
                      </td>
                      <td className="text-sm p-3"> {id}</td>

                      <td className="text-sm p-3">{userId}</td>
                      <td className="text-sm p-3"> {deadLine}</td>
                      <td className="text-sm p-3">{additionalInformation}</td>

                      <td className="text-sm p-3">{deadLine}</td>
                      <td>
                        <Link href={`estimates/${id}`}> Ici ahah</Link>
                      </td>
                      <td className="flex justify-center">
                        <div className="relative inline-block w-10 mr-2 align-middle select-none">
                          <input
                            type="checkbox"
                            name="toggle"
                            id="Green"
                            className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                          />
                          <label
                            htmlFor="Green"
                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                          ></label>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* ___________ QUOTATION IN THE PROCESS OF CREATION  ___________*/}
        {/* <div className="flex justify-center items-center">
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
        </div> */}

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
