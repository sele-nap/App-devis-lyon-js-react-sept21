import Layout from "../components/Layout";
import next from "next";
import Image from "next/image";
import defense from "../public/Img/defense.jpeg";
import echarpe from "../public/Img/echarpe.jpeg";
import europe from "../public/Img/europe.jpeg";
import legion from "../public/Img/legion.jpeg";
import nationale from "../public/Img/nationale.jpeg";
import medaille from "../public/Img/medaille.jpg";
import coupe2 from "../public/Img/coupe2.jpeg";
import trophée from "../public/Img/trophée.jpeg";
import medaillesport from "../public/Img/medaillesport.jpg";

export default function Catalog() {
  return (
    <Layout>
      <div className="flex justify-center">
        <h1 className="border-2 border-third text-black rounded cursor-auto p-1  text-2xl mb-4 uppercase text-center">
          Catalogue
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Médaille
                </p>
                <p className="uppercase text-sm text-gray-400">
                  Légion d{`'`}honneur
                </p>
              </div>
              <div className="prod-img">
                <Image
                  src={legion}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Médaille
                </p>
                <p className="uppercase text-sm text-gray-400">Européenne</p>
              </div>
              <div className="prod-img">
                <Image
                  src={europe}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Médaille
                </p>
                <p className="uppercase text-sm text-gray-400">Défense</p>
              </div>
              <div className="prod-img">
                <Image
                  src={defense}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Médaille
                </p>
                <p className="uppercase text-sm text-gray-400">Nation</p>
              </div>
              <div className="prod-img">
                <Image
                  src={nationale}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4 mb-8">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Médaille
                </p>
                <p className="uppercase text-sm text-gray-400">Championnat</p>
              </div>
              <div className="prod-img">
                <Image
                  src={medaille}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4 mb-8">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Médaille
                </p>
                <p className="uppercase text-sm text-gray-400">Sport</p>
              </div>
              <div className="prod-img">
                <Image
                  src={medaillesport}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4 mb-8">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Coupe
                </p>
                <p className="uppercase text-sm text-gray-400">Champion</p>
              </div>
              <div className="prod-img">
                <Image
                  src={trophée}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4 mb-8">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Coupe
                </p>
                <p className="uppercase text-sm text-gray-400">Champion</p>
              </div>
              <div className="prod-img">
                <Image
                  src={coupe2}
                  alt=""
                  width={200}
                  height={300}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">35€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
