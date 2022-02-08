import Image from "next/image";
import ImageDrapeau from "../public/Img/drapeau.jpg";
import ImageTrophee from "../public/Img/trophée.jpeg";
import ImageEcharpe from "../public/Img/echarpe.jpeg";
import ImageMedaille from "../public/Img/medaille.jpg";
import Layout from "../components/Layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
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
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const { currentUserProfile } = useContext(CurrentUserContext);
  return (
    <div>
      <Layout>
        <h1 className="w-full font-main my-2 mb-8 p-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Les superbes médailles vous souhaitent la bienvenue
        </h1>
        <div className="h-90 w-full">
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

          <div className=" flex flex-row justify-around p-5 ">
            <p className="w-full text-justify mx-20">
              Cat ipsum dolor sit amet, refuse to leave cardboard box pretend
              you want to go out but then dont headbutt owners knee. Sit as
              close as possible to warm fire without sitting on cold floor avoid
              the new toy and just play with the box it came in, and rub face on
              everything, or attack the child or meowwww or munch, munch, chomp,
              chomp.
            </p>
          </div>
          <div>
            <div className="flex justify-center mt-12">
              <h2 className="mt-7 border-2 bg-yellow-400 p-4 font-bold border-third text-black rounded cursor-auto  text-xl mb-4 uppercase text-center">
                Produits du moment
              </h2>
            </div>
            <div className=" mt-8 h-full p-7 w-full m-100 flex justify-around">
              <Link href="/catalog">
                <a>
                  <Image
                    src={ImageDrapeau}
                    width="200px"
                    height="200px "
                    className="box col-start-1"
                    alt=""
                  />
                </a>
              </Link>

              <Link href="/catalog">
                <a>
                  <Image
                    src={ImageEcharpe}
                    width="200px"
                    height="200px"
                    alt=""
                  />
                </a>
              </Link>

              <Link href="/catalog">
                <a>
                  <Image
                    src={ImageMedaille}
                    width="200px"
                    height="200px"
                    className=""
                    alt=""
                  />
                </a>
              </Link>

              <Link href="/catalog">
                <a>
                  <Image
                    src={ImageTrophee}
                    width="200px"
                    height="200px"
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
