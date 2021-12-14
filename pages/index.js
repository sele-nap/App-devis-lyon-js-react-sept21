import next from "next";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import coupe from "../public/Img/coupe.jpg";
import coupe1 from "../public/Img/coupe1.jpg";
import medaille from "../public/Img/medaille.jpg";
import oscar1 from "../public/Img/oscar1.jpg";
import oscar2 from "../public/Img/oscar2.jpg";
import styles from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";


SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  return (
    <Layout className="bg-primary">
      <h1 className="text-center">
        Maison de tradition lyonnaise de qualité
        <br />
        Vous souhaite la bienvenue
      </h1>
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
          <Image src={medaille} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={oscar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={oscar2} alt="" />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
}
