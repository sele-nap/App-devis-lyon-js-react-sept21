import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/globals.css";
import ImageDrapeau from "../public/Img/drapeau.jpg";
import ImageTrophee from "../public/Img/trophée.jpeg";
import ImageEcharpe from "../public/Img/echarpe.jpeg";
import ImageMedaille from "../public/Img/medaille.jpg";

export default function Home() {
  return (
    <div className="bg-primary w-full">
      <h1 className="text-center text-2xl m-10">
        {" "}
        maison de tradition lyonnaise de qualité vous souhaite la bienvenue
      </h1>
      <div className="h-40 w-full shadow-2xl shadow-black bg-gray-200">
        <div className="h-40">carroussel</div>
        {/* <div className={styles.carousel}>
          <div className={styles.carousel - inner}>
            <input
              className={styles.carousel - open}
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden=""
              checked="checked"
            />
            <div className={styles.carousel - item}>
              <Image src={ImageDrapeau} />
            </div>
            <input
              className={styles.carousel - open}
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden=""
            />
            <div className={styles.carousel - item}>
              <Image src={ImageEcharpe} />
            </div>
            <input
              className={styles.carousel - open}
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden=""
            />
            <div className={styles.carousel - item}>
              <Image src={ImageMedaille} />
            </div>
            <label
              for="carousel-3"
              className={styles.carousel - control.prev - control - 1}
            >
              ‹
            </label>
            <label
              for="carousel-2"
              className={styles.carousel - control.next - control - 1}
            >
              ›
            </label>
            <label
              for="carousel-1"
              className={styles.carousel - control.prev - control - 2}
            >
              ‹
            </label>
            <label
              for="carousel-3"
              className={styles.carousel - control.next - control - 2}
            >
              ›
            </label>
            <label
              for="carousel-2"
              className={styles.carousel - control.prev - control - 3}
            >
              ‹
            </label>
            <label
              for="carousel-1"
              className={styles.carousel - control - next - control - 3}
            >
              ›
            </label>
            <ol className={styles.carousel - indicators}>
              <li>
                <label for="carousel-1" className={styles.carousel - bullet}>
                  •
                </label>
              </li>
              <li>
                <label for="carousel-2" className={styles.carousel - bullet}>
                  •
                </label>
              </li>
              <li>
                <label for="carousel-3" className={styles.carousel - bullet}>
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
      </div> */}

        <div className="bg-primary flex flex-row-reverse justify-around p-5 shadow-xl shadow-black">
          <Image src={ImageDrapeau} width="100px" height="100px" className="" />
          <p>lorem ipsum</p>
        </div>
        <div className="bg-secondary ">
          <div className=" ">
            <h2 className="text-center text-xl m-3 pt-3">Produit du moment</h2>
            <div className="grid gap-x-1 gap-y-2 grid-cols-2  p-7 w-full border-solid border-2 border-black rounded-xl ">
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
    </div>
  );
}
