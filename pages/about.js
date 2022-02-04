import Layout from "../components/Layout";
import next from "next";

export default function About() {
  return (
    <Layout title="Qui sommes nous ?">
      <div className="flex justify-center">
        <h1 className="border-2 border-third text-black rounded cursor-auto p-1  text-2xl mb-4 uppercase text-center">
          Qui sommes-nous ?
        </h1>
      </div>
    </Layout>
  );
}
