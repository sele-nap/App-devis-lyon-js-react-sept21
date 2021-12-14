import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/globals.css";
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
        <div className="h-40 w-full shadow-2xl shadow-black bg-gray-200">
          <div className="h-40">carroussel</div>

          <div className="bg-primary flex flex-row-reverse justify-around p-5 shadow-xl shadow-black">
            <Image
              src={ImageDrapeau}
              width="100px"
              height="100px"
              className=""
            />
            <p>lorem ipsum</p>
          </div>
          <div className="bg-secondary ">
            <div className=" ">
              <h2 className="text-center text-xl m-3 pt-3">
                Produit du moment
              </h2>
              <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-6  p-7 w-full border-solid border-2 border-black rounded-xl ">
                <div className="">
                  <Image
                    src={ImageDrapeau}
                    width="100px"
                    height="100px"
                    className=""
                  />
                </div>
                <div className="">
                  <Image src={ImageEcharpe} width="100px" height="100px" />
                </div>

                <div className="">
                  <Image
                    src={ImageMedaille}
                    width="100px"
                    height="100px"
                    className=""
                  />
                </div>
                <div className="">
                  <Image src={ImageTrophee} width="100px" height="100px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
