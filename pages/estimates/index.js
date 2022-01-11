import Layout from "../../components/Layout";
import { IoIosAddCircle } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiFileEditFill } from "react-icons/ri";
import next from "next";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";

export default function EstimateManagement() {
  const handleClick = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Votre devis a bien été créée !",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const Download = (e) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Votre devis a bien été téléchargé !",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const deleteEstimate = async (id) => {
    if (confirm("Voulez vous vraiment supprimer ce projet définitivement ?")) {
      await axios.delete(`/api/estimate/${id}`);
      alert("projet bien supprimé");
      setEstimate((estimate) => estimate.filter((e) => e.id !== id));
    }
  };

  const [estimate, setEstimate] = useState();

  useEffect(() => {
    axios.get("/api/estimate").then((res) => setEstimate(res.data));
  }, []);

  return (
    <Layout>
      <section className="bg-slate-50">
        {/* ___________ VALID ESTIMATE / WAITING FOR VALIDATION  ___________*/}

        <div className="flex justify-center">
          <button className="mt-10  border-2 border-third text-black rounded cursor-auto p-1 ">
            Liste des devis validés ou en attente de validation
          </button>
        </div>

        {!estimate && <p>En chargement...</p>}
        {estimate?.length === 0 && <p>Pas de devis actuellement</p>}
        {estimate && estimate.length !== 0 && (
          <div className="table w-full p-2 mt-8">
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-2"></th>
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
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
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
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

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
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

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
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

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Date limite du devis
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>

                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
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
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
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
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Suppression
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
                  ({
                    id,
                    deadLine,
                    additionalInformation,
                    customer,
                    createDate,
                  }) => (
                    <tr className="w-full text-center border-b my-2" key={id}>
                      <td className="p-2 border-r">
                        <input type="checkbox" />
                      </td>
                      <td className="text-sm p-3"> {customer.id}</td>

                      <td className="text-center border text-sm p-3 my-2">
                        {customer.lastname}
                      </td>
                      <td className="text-center border  text-sm p-3 my-2">
                        {moment(createDate).format(`DD/MM/YYYY`)}
                      </td>
                      <td className="text-center border  text-sm p-3 my-2">
                        {additionalInformation}
                      </td>

                      <td className="text-center border text-sm p-3 my-2">
                        {moment(deadLine).format(`DD/MM/YYYY`)}
                      </td>
                      <td className="border">
                        <Link href={`estimates/${id}`}>
                          <button className="cursor-pointer my-2">
                            <RiFileEditFill size={25} />
                          </button>
                        </Link>
                      </td>
                      <td className="">
                        <div className="text-center my-2 relative inline-block w-10 mr-2 align-middle select-none">
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
                      <td className="text-center border my-2">
                        <button
                          className="cursor-pointer"
                          onClick={() => deleteEstimate(id)}
                        >
                          <RiDeleteBin5Fill size={25} />
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* ___________ CREATE A QUOTATION  ___________*/}
        <div className="flex justify-around items-center my-8">
          <Link passHref href="/admin/devis/edit/new">
            <button
              className="flex p-2 pl-2 bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 rounded-full cursor-pointer"
              type="submit"
              onClick={handleClick}
            >
              <IoIosAddCircle size={20} />
              <p className="px-2"> CRÉER UN DEVIS</p>
            </button>
          </Link>

          {/* ___________ DOWNLOAD  ___________*/}
          <button
            className="flex p-2 pl-2 bg-third hover:bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 rounded-full cursor-pointer"
            onClick={Downloaad}
          >
            <FaCloudDownloadAlt size={20} />
            <p className="px-2">TÉLÉCHARGER</p>
          </button>
        </div>
      </section>
    </Layout>
  );
}
