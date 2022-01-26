import Image from "next/image";
import ImageDrapeau from "../public/Img/drapeau.jpg";
import ImageTrophee from "../public/Img/trophée.jpeg";
import ImageEcharpe from "../public/Img/echarpe.jpeg";
import ImageMedaille from "../public/Img/medaille.jpg";
import Layout from "../components/Layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import coupe from "../public/Img/coupe.jpg";
import coupe1 from "../public/Img/coupe1.jpg";
import Medal from "../public/Img/Medal.jpg";
import oscar1 from "../public/Img/oscar1.jpg";
import oscar2 from "../public/Img/oscar2.jpg";
import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import HelloGuy from "../components/HelloGuy";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const { currentUserProfile } = useContext(CurrentUserContext);
  return (
    <div>
      <Layout>
        <HelloGuy />
        <h1 className="w-full my-2 mb-8 text-5xl font-bold leading-tight text-center text-gray-800 underline underline-offset-8">
          Les super médailles vous souhaite la bienvenue
        </h1>
        <div className="h-90 w-full bg-gray-200">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className={styles.swiper}
          >
            <SwiperSlide>
              <Image src={coupe1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Medal} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={oscar1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={oscar2} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="bg-primary flex flex-row-reverse justify-around p-5 ">
            <p className="w-full text-justify mx-20">
              Cat ipsum dolor sit amet, refuse to leave cardboard box pretend
              you want to go out but then dont headbutt owners knee. Sit as
              close as possible to warm fire without sitting on cold floor avoid
              the new toy and just play with the box it came in, and rub face on
              everything, or attack the child or meowwww or munch, munch, chomp,
              chomp.
            </p>
          </div>
          <div className="bg-secondary ">
            <div className="flex justify-center">
              <h2 className="mt-7 border-2 border-third text-black rounded cursor-auto p-1 text-xl mb-4 uppercase text-center">
                Produit du moment
              </h2>
            </div>
            <div className=" h-full p-7 w-full m-100">
              <div className=" border-solid border-2 border-black rounded-xl p-5 md:border-none grid overflow-hidden grid-cols-2 grid-rows-2 gap-6 pb">
                <Link href="/catalog">
                  <a className="flex justify-center md:justify-end ">
                    <Image
                      src={ImageDrapeau}
                      width="200px"
                      height="200px "
                      className="box col-start-1"
                    />
                  </a>
                </Link>

                <Link href="/catalog">
                  <a className="flex justify-center md:justify-between">
                    <Image src={ImageEcharpe} width="200px" height="200px" />
                  </a>
                </Link>

                <Link href="/catalog">
                  <a className="flex justify-center md:justify-end">
                    <Image
                      src={ImageMedaille}
                      width="200px"
                      height="200px"
                      className=""
                    />
                  </a>
                </Link>

                <Link href="/catalog">
                  <a className="flex justify-center md:justify-between">
                    <Image src={ImageTrophee} width="200px" height="200px" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
