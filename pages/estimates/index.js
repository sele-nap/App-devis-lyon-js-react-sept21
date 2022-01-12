import Layout from "../../components/Layout";
import ToDoArray from "../../components/ToDoArray";
import DraftArray from "../../components/DraftArray";
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

  return (
    <Layout>
      <ToDoArray />
      <DraftArray />

      {/* ___________ CREATE AN ESTIMATE  ___________*/}

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
          onClick={Download}
        >
          <FaCloudDownloadAlt size={20} />
          <p className="px-2">TÉLÉCHARGER</p>
        </button>
      </div>
    </Layout>
  );
}
