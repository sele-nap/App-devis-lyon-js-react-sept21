import Link from "next/link";
import { AiOutlineLogin } from "react-icons";
import { IoIosAddCircle } from "react-icons";
import { GoSearch } from "react-icons";
import Image from "next/image";
import LogoSansBlabla from "../public/assets/LogoSansBlabla.png";

export default function Navbar() {
  return (
    <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
      <div className="inline-flex">
        <Link href="/">
          <div className="block md:hidden">
            <Image
              src={LogoSansBlabla}
              alt="Logo"
              width="100px"
              height="100px"
            />
          </div>
        </Link>
      </div>

      <Link href="/Devis">
        <a>
          Devis <IoIosAddCircle />
        </a>
      </Link>

      <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div className="inline-block">
          <div className="inline-flex items-center max-w-full">
            <button
              className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
              type="button"
            >
              <div className="flex items-center justify-center relative  h-8 w-8 rounded-full">
                <GoSearch />
              </div>
              <div className="block flex-grow flex-shrink overflow-hidden">
                Recherche
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-initial">
        <div className="flex justify-end items-center relative">
          <div className="flex mr-4 items-center">
            <a
              className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full"
              href="#"
            >
              <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                {" "}
                <Link href="/Connexion"> Connexion</Link>
              </div>
            </a>
            <div className="block relative">
              <button
                type="button"
                className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
              >
                <div className="flex items-center h-5">
                  <div className="_xpkakx">
                    <AiOutlineLogin />
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div classNameName="block">
            <div classNameName="inline relative">
              <button
                type="button"
                classNameName="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
              >
                <div className="pl-1">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
                  >
                    <g fill="none" fillRule="nonzero">
                      <path d="m2 16h28"></path>
                      <path d="m2 24h28"></path>
                      <path d="m2 8h28"></path>
                    </g>
                  </svg>
                </div>

                <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                  >
                    <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
