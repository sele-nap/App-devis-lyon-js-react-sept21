import React from "react";
import Layout from "../components/Layout";

const Custom404 = () => {
  return (
    <div>
      <Layout>
        <h1 className="border-2 border-third text-black rounded cursor-auto p-1  text-2xl mb-4 uppercase text-center">
          Erreur
        </h1>
        <h2 className="text-center text-5xl"> OMG Ca ne fonctionne pas</h2>
      </Layout>
    </div>
  );
};

export default Custom404;
