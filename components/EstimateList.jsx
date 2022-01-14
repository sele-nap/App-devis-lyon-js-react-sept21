import { IoIosAddCircle } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiFileEditFill } from "react-icons/ri";
import { QueryClient, QueryClientProvider } from "react-query";
import next from "next";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import ToggleButton from "./ToggleButton";

export default function EstimateList({ statusList, limit = 5, offset = 0 }) {

  const deleteEstimate = async (id) => {
    if (confirm("Voulez vous vraiment supprimer ce projet définitivement ?")) {
      await axios.delete(`/api/estimate/${id}`);
      alert("projet bien supprimé");
      setEstimate((estimate) => estimate.filter((e) => e.id !== id));
    }
  };

  const [estimate, setEstimate] = useState([]);

  useEffect(() => {
    const statusParam = statusList.map(s => `status=${s}`) .join(`&`)
    
    axios
      .get(`/api/estimate?${statusParam}&offset=${offset}&limit=${limit}`)
      .then((res) => setEstimate(res.data));
  }, [offset, limit, statusList]);

  const queryClient = new QueryClient();

  return (
    <section>
      {/* ___________ VALIDED ESTIMATE / WAITING FOR VALIDATION  ___________*/}

      <div className="flex justify-center">
        <div className="mt-10  border-2 border-third text-black rounded cursor-auto p-1 ">
          Liste des devis validés ou en attente de validation
        </div>
      </div>

      {!estimate && <p>En chargement...</p>}
      {estimate?.length === 0 && <p>Pas de devis actuellement</p>}
      {estimate && estimate.length !== 0 && (
        <div className="table w-full p-2 mt-8">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
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
                  status
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
                      <Link href={`estimates/${id}`} passHref>
                        <button className="cursor-pointer my-2">
                          <RiFileEditFill size={25} />
                        </button>
                      </Link>
                    </td>
                    <td className="">
                        <div className="text-center my-2 relative inline-block w-10 mr-2 align-middle select-none">
                          <ToggleButton e = {{id}} />

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

      {/* <EstimateList status="VALIDATED" /> */}
    </section>
  );
}
