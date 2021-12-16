import React from "react";
import Layout from "../components/Layout";

function devis() {
  return (
    <div>
      <Layout>
        <div className=" flex justify-center">
          <h1 className="bg-third w-1/3 h-25 flex justify-center rounded-3xl m-20 p-3 text-xl">
            Votre demande de devis
          </h1>
        </div>
        <form>
          <label>devis</label>
          <div className="flex align items-center flex-col">
            <textarea
              className="appearance-none block w-4/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address1"
              name="address1"
              type="text"
            />
            <label> Pour quand ? :</label>
            <input
              type="date"
              className="mt-5 appearance-none block w-1/5  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            />
          </div>
        </form>
        <div className="flex justify-center">
          {" "}
          <button className="bg-third w-1/4 h-10 flex justify-center rounded-3xl m-20 p-2 text-ml">
            Ajouter pièces jointes 3 maximum
          </button>
        </div>

        <div className="flex flex-row justify-around">
          <button className="bg-third w-1/4 h-10 flex justify-center rounded-3xl m-20 p-2 text-ml ">
            Soumettre un devis
          </button>
          <button className="bg-third w-1/4 h-10 flex justify-center rounded-3xl m-20 p-2 text-ml">
            Enregistrer ma demande pour continuer plus tard
          </button>
        </div>
      </Layout>
    </div>
  );
}

export default devis;
