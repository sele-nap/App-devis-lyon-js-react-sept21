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
import ToggleButton from "./ToggleButton";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

export default function EstimateList({ statusList, limit = 5, offset = 0 }) {
  const { currentUserIsAdmin } = useContext(CurrentUserContext);

  const perPage = 5;
  const [estimatesList, setEstimatesList] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [estimatesListLoading, setEstimatesListLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [orderByDesc, setOrderByDesc] = useState(true);

  const deleteEstimate = async (id) => {
    Swal.fire({
      title: "Etes vous sûr de vouloir supprimer votre devis?",
      text: "Cette action est irréversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DAB455",
      cancelButtonColor: "#ECE6E6",
      confirmButtonText: "Oui, supprimé",
    }).then((result) => {
      if (result.isConfirmed) {
        // if (confirm("Voulez vous vraiment supprimer ce devis définitivement ?")) {

        //   alert("Projet bien supprimé");
        axios.delete(`/api/estimate/${id}`);
        setEstimatesList((estimatesList) =>
          estimatesList.filter((e) => e.id !== id)
        );
        Swal.fire("Supprimé", "Votre devis a bien été supprimé", "success");
      }
    });
  };

  const getEstimates = (statusList, currentPage, perPage) => {
    const statusParam = statusList.map((s) => `statusList=${s}`).join(`&`);

    axios
      .get(
        `/api/estimate?${statusParam}&offset=${
          (currentPage - 1) * perPage
        }&limit=${perPage}&orderBy=${
          orderByDesc ? "createDateDesc" : "createDateAsc"
        }`
      )

      .then((res) => {
        setEstimatesList(res.data);
        console.log(res.headers["x-total-count"]);
        setNumberOfPages(
          Math.ceil(parseInt(res.headers["x-total-count"]) / perPage)
        );
      });
  };
  useEffect(() => {
    getEstimates(statusList, currentPage, perPage, orderByDesc);
  }, [currentPage, perPage, statusList, orderByDesc]);

  return (
    <section>
      {/* ___________ VALIDED ESTIMATE / WAITING FOR VALIDATION  ___________*/}

      <div className="flex justify-center">
        <div className="ml-2 pl-10 pt-3 flex justify-center items-center text shadow w-96 h-12 bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
          <span className="text-md text-center">
            {" "}
            Devis validés ou en attente de validation{" "}
          </span>
        </div>
      </div>

      {!estimatesList && <p>En chargement...</p>}
      {estimatesList?.length === 0 && <p>Pas de devis actuellement</p>}
      {estimatesList && estimatesList.length !== 0 && (
        <div className="table w-full p-2 mt-8">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                  <div className="flex items-center justify-center">
                    Numéro Devis
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

                <th className="p-2 mr-5 border-r cursor-auto text-md font-bold text-gray-500">
                  <div className="flex items-center justify-center">
                    Date de création devis
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setOrderByDesc(!orderByDesc);
                      }}
                    >
                      {orderByDesc ? (
                        <IoMdArrowDropupCircle size={25} />
                      ) : (
                        <IoMdArrowDropdownCircle size={25} className="" />
                      )}
                    </button>
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

                {currentUserIsAdmin ? (
                  <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
                    <div className="flex items-center justify-center">
                      Validation par e-mail
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </div>
                  </th>
                ) : null}

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
              {estimatesList.map(
                ({
                  id,
                  deadLine,
                  additionalInformation,
                  customer,
                  createDate,
                  status,
                  validationDate,
                }) => (
                  <tr className="w-full text-center border-b my-2" key={id}>
                    <td className="text-sm p-3"> {id}</td>

                    <td className="text-center border text-sm p-3 my-2">
                      {customer?.lastname} {customer?.firstname}
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
                    {currentUserIsAdmin ? (
                      <td className="">
                        <div className="text-center my-2 relative inline-block w-10 mr-2 align-middle select-none">
                          <ToggleButton
                            e={{ id, status }}
                            handleChange={() =>
                              getEstimates(statusList, currentPage, perPage)
                            }
                          />
                        </div>
                      </td>
                    ) : null}
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
      <nav className="border-t border-gray-200 px-4 flex items-center justify-center sm:px-0 md:-mt-px md:flex">
        <div className="flex items-center">
          {new Array(numberOfPages)
            .fill()
            .map((_, i) => i + 1)
            .map((page) => {
              return (
                <a
                  className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex  items-center text-sm font-medium"
                  key={page}
                  style={{ display: "inline-block", minWidth: 48 }}
                  href={`/estimates?currentPage=${page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </a>
              );
            })}
        </div>
      </nav>
      {/* <EstimateList status="VALIDATED" /> */}
    </section>
  );
}
