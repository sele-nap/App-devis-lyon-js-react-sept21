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
import medaille2 from "../public/Img/medaille2.jpg";
import oscar1 from "../public/Img/oscar1.jpg";
import oscar2 from "../public/Img/oscar2.jpg";
import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Imagetrophée from "../public/Img/imagetrophée.jpg";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  return (
    <div className="">
      <Layout className="bg-primary">
        <h1 className="text-center text-2xl m-10">
          {" "}
          Maison de tradition lyonnaise de qualité vous souhaite la bienvenue
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
              <Image src={coupe} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={coupe1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={medaille2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={oscar1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={oscar2} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="bg-primary flex flex-row-reverse justify-around p-5 ">
            <p className="w-full text-justify mr-5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
            </p>
          </div>
          <div className="bg-secondary ">
            <div className="bg-secondary ">
              <div className=" ">
                <h2 className="text-center text-xl m-3 pt-3">
                  Produit du moment
                </h2>
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
                        <Image
                          src={ImageEcharpe}
                          width="200px"
                          height="200px"
                        />
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
