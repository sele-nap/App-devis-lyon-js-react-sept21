import Image from "next/image";
<<<<<<< HEAD
// import styles from "../styles/globals.css";
=======
>>>>>>> navbar
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
<<<<<<< HEAD
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
=======
          WIN maison de tradition lyonnaise de qualité vous souhaite la
          bienvenue
        </h1>
        <div className="h-40 w-full bg-purple-500">Caroussel</div>
        <div className="bg-gray-200 flex flex-row-reverse justify-around p-5 border-solid border-1px border-black">
          <Image
            src={ImageDrapeau}
            width="100px"
            height="100px"
            alt="drapeau français bleu, blanc, rouge"
            className="rounded-lg border-solid border-1 border-black"
          />
          <p>
            Cat ipsum dolor sit amet, mew mew. Flex claws on the humans belly
            and purr like a lawnmower scratch at the door then walk away and
            push your water glass on the floor, but i bet my nine lives on
            you-oooo-ooo-hooo so check cat door for ambush 10 times before
            coming in or go into a room to decide you didnt want to be in there
            anyway so stare at owner accusingly then wink.
          </p>
        </div>

        <div className="p-1 bg-black-800 rounded-xl">
          <div className="bg-purple-400  border-solid border-2 border-indigo-600 ">
            <h2 className="text-center text-xl m-5 pt-3">Produit du moment</h2>
            <div className="grid overflow-hidden grid-cols-2 grid-rows-2 gap-8">
              <div className="box">
                <Image
                  src={ImageDrapeau}
                  width="140px"
                  height="140px"
                  alt="drapeau"
                  className="border-solid border-2 border-indigo-600"
                />
              </div>
              <div className=" box">
                <Image
                  src={ImageEcharpe}
                  width="140px"
                  height="140px"
                  alt="drapeau"
                />
              </div>

              <div className="box">
                <Image
                  src={ImageMedaille}
                  width="140px"
                  height="140px"
                  alt="drapeau"
                />
              </div>
              <div className="box">
                <Image
                  src={ImageTrophee}
                  width="140px"
                  height="140px"
                  alt="drapeau"
                />
>>>>>>> navbar
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
