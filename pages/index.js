import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageDrapeau from "../public/Img/drapeau.jpg";
import ImageTrophee from "../public/Img/trophée.jpeg";
import ImageEcharpe from "../public/Img/echarpe.jpeg";
import ImageMedaille from "../public/Img/medaille.jpg";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <div className="">
    <Layout className="bg-primary">
      <h1 className="text-center text-2xl m-10">
        {" "}
        maison de tradition lyonnaise de qualité vous souhaite la bienvenue
      </h1>
      <div className="h-40 w-full bg-red-200">Caroussel</div>
      <div className="bg-gray-200 flex flex-row-reverse justify-around p-5 border-solid border-1px border-black">
        <Image
          src={ImageDrapeau}
          width="100px"
          height="100px"
          className="rounded-lg border-solid border-1 border-black"
        />
        <p>lorem ipsum</p>
      </div>
      <div className="p-1 bg-blue-500 rounded-xl">
        <div className="bg-blue-400  border-solid border-2 border-indigo-600 ">
          <h2 className="text-center text-xl m-5 pt-3">Produit du moment</h2>
          <div className="grid grid-cols-2 p-3 w-full ">
            <div className=" ml-6 ">
              <Image
                src={ImageDrapeau}
                width="140px"
                height="140px"
                className="border-solid border-2 border-indigo-600"
              />
            </div>
            <div className=" mr-2">
              <Image src={ImageEcharpe} width="140px" height="140px" />
            </div>

            <div className="ml-6">
              <Image
                src={ImageMedaille}
                width="140px"
                height="140px"
                className=""
              />
            </div>
            <div className="mr-2">
              <Image src={ImageTrophee} width="140px" height="140px" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </div>
  );
}
