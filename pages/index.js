import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import ImageDrapeau from "../public/Img/drapeau.jpg";
import ImageTrophee from "../public/Img/trophée.jpeg";
import ImageEcharpe from "../public/Img/echarpe.jpeg";
import ImageMedaille from "../public/Img/medaille.jpg";
import Layout from "../components/Layout";
import Link from "next/link";

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

          <div className="bg-primary flex flex-row-reverse justify-around p-5 border-solid border-purple-300">
            <Image
              src={ImageDrapeau}
              width="200px"
              height="200px"
              className=""
            />
            <p className="w-1/3 text-justify">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </p>
          </div>
          <div className="bg-secondary ">
            <div className=" ">
              <h2 className="text-center text-xl m-3 pt-3">
                Produit du moment
              </h2>
              <div className=" h-full p-7 w-full m-100">
                <div className=" border-solid border-2 border-black rounded-xl p-5 grid overflow-hidden grid-cols-2 grid-rows-2 gap-6 pb-20 mb-50">
                  <div className="box col-start-1">
                    <Link href="/catalog">
                      <a>
                        <Image
                          src={ImageDrapeau}
                          width="200px"
                          height="200px"
                          className=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="">
                    <Link href="/catalog">
                      <a>
                        <Image
                          src={ImageEcharpe}
                          width="200px"
                          height="200px"
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="">
                    <Link href="/catalog">
                      <a>
                        <Image
                          src={ImageMedaille}
                          width="200px"
                          height="200px"
                          className=""
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="">
                    <Link href="/catalog">
                      <a>
                        <Image
                          src={ImageTrophee}
                          width="200px"
                          height="200px"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
