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
import medaille from "../public/Img/medaille.jpg";
import oscar1 from "../public/Img/oscar1.jpg";
import oscar2 from "../public/Img/oscar2.jpg";
import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  return (
    <div className="">
      <Layout className="bg-primary">
        <h1 className="text-center text-2xl m-10">
          {" "}
          maison de tradition lyonnaise de qualité vous souhaite la bienvenue
        </h1>
      

          <div className="bg-primary flex flex-row-reverse justify-around p-5 ">
            <div className="hidden md:block rounded-xl">
              <Image
                className="rounded-xl"
                src={ImageTrophée}
                width="200px"
                height="200px"
              />
            </div>

            <p className=" w-full md:w-1/2 text-justify">
        <div className="h-90 w-full shadow-2xl shadow-black bg-gray-200">
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
          <Image src={coupe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={coupe1} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide> */}
          {/* <Image src={medaille} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image src={oscar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={oscar2} alt="" />
        </SwiperSlide>
      </Swiper>

          <div className="bg-primary flex flex-row-reverse justify-around p-5 border-solid border-purple-300">
            <Image src={ImageDrapeau} width="300px" height="100px" alt="" />
            <p className="w-1/3 text-justify">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
            </p>
          </div>
          <div className="bg-secondary ">
            <div className=" ">
              <h2 className="text-center text-xl m-3 pt-8">
                Produits du moment
              </h2>
              <div className=" h-full p-7 w-full m-100">
                <div className=" border-solid border-2 border-black rounded-xl p-5  sm: grid overflow-hidden grid-cols-2 grid-rows-2 gap-6  md:border-none ">
                  <Link href="/catalog">
                    <a className="flex justify-center md:justify-end ">
                      <Image
                        src={ImageDrapeau}
                        width="200px"
                        height="200px "
                        className="box col-start-1 rounded-xl  border-4 border-black "
                        alt=""
                      />
                    </a>
                  </Link>

                  <Link href="/catalog">
                    <a className="flex justify-center md:justify-between">
                      <Image
                        src={ImageEcharpe}
                        width="200px"
                        height="200px"
                        className="rounded-xl"
                        alt=""
                      />
                    </a>
                  </Link>

                  <Link href="/catalog">
                    <a className="flex justify-center md:justify-end ">
                      <Image
                        src={ImageMedaille}
                        width="200px"
                        height="200px"
                        className="rounded-xl"
                        alt=""
                      />
                    </a>
                  </Link>

                  <Link href="/catalog">
                    <a className="flex justify-center md:justify-between ">
                      <Image
                        src={ImageTrophee}
                        width="200px"
                        height="200px"
                        className="rounded-xl"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
// lg:  grid-cols-4 grid-rows-1 gap-6
