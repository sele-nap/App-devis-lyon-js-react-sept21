import Layout from "../../components/Layout";
import EstimateList from "../../components/EstimateList";
import DraftArray from "../../components/DraftArray";
import { IoIosAddCircle } from "react-icons/io";
import next from "next";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment";
import { useRouter } from "next/router";
import ClientLayout from "../../components/ClientLayout";

export default function EstimateManagement() {
  return (
    <Layout title="mes devis">
      <ClientLayout>
        <EstimateList
          statusList={["TO_DO", "WAITING_FOR_VALIDATION", "VALIDATED"]}
        />
        <DraftArray statusList={["DRAFT"]} />
        <div className="flex justify-around items-center my-8">
          <Link href="/askEstimatePage">
            <a>
              <button
                className="flex pt-3 pl-10 flex-row around shadow w-64 h-12 bg-third hover:bg-yellow-600 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded cursor-pointer"
                type="submit"
              >
                <IoIosAddCircle size={20} />
                <p className="px-2"> CRÉER UN DEVIS</p>
              </button>
            </a>
          </Link>
        </div>
      </ClientLayout>
    </Layout>
  );
}
