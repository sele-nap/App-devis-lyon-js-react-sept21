import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout";
import Swal from "sweetalert2";
import CtaButton from "../../components/CtaButton";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AdminLayout from "../../components/AdminLayout";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Link from "next/link";

export default function ProductDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const isUpdate = id !== "new";

  const saveProduct = async () => {
    const formValues = {
      name,
      description,
      unitPrice,
    };
    try {
      if (isUpdate) {
        await axios.patch(`/api/product/${id}`, formValues).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Produit mis à jour",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      } else {
        await axios.post(`/api/product/${id}`, formValues);
      }
      router.push("/products");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id && isUpdate) {
      axios
        .get(`/api/product/${id}`)
        .then(({ data: { name, description, unitPrice } }) => {
          setName(name);
          setDescription(description), setUnitPrice(unitPrice);
        });
    }
  }, [isUpdate, id]);

  return (
    <Layout title="Modification du produit">
      <AdminLayout>
        <div className="flex flex-col">
          <div className="flex items-center justify-center w-full">
            <form
              className="w-full max-w-lg"
              onSubmit={async (e) => {
                e.preventDefault();
                await saveProduct();
              }}
            >
              <div className=" -mx-3 mb-6">
                <div className="w-full  px-3 mb-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Désignation
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">
                    Description
                  </label>
                  <input
                    className="appearance-none block h-24 w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Prix unitaire HT
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    id="unitPrice"
                    name="unitPrice"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="py-2 px-4 hover:bg-yellow-300 bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10"
              >
                Sauvegardez mon profil
              </button>
            </form>
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/products" passHref>
              <button className="ml-2 shadow w-64 h-12 bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
                <ArrowBackIcon />
                <span className="mx-2"> Mes produits </span>
              </button>
            </Link>
            <button className="ml-2 shadow w-64 h-12 bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded">
              <DeleteForeverIcon />
              <span className="mx-2"> Suppression </span>
            </button>
          </div>
        </div>
      </AdminLayout>
    </Layout>
  );
}
