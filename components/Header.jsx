import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { VscSearch } from "react-icons/vsc";
import Image from "next/image";
import LogoSansBlabla from "../public/Img/LogoSansBlabla.png";
import Swal from "sweetalert2";

const Header = () => {
  const { data: session, status } = useSession();

  const handleEstimateClick = () => {
    if (status === "unauthenticated") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Vous devez ếtre identifié pour pouvoir demander un devis",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
  return (
    <div className="flex flex-row w-full items-center p-2  m-0 justify-around shadow-xs bg-third ">
      <Link href="/" passHref>
        <a className="flex justify-center md:justify-end ">
          <Image src={LogoSansBlabla} alt="Logo" width="50px" height="50px" />
        </a>
      </Link>
      <div className="text-black flex flex-row   ">
        {" "}
        <Link href="/askEstimatePage">
          <a className="">
            {" "}
            <button
              className="ml-3 mr-3 text-sm text-white flex justify-center flex-col items-center md text-lg:lg hover:text-black"
              onClick={handleEstimateClick}
            >
              Devis <IoIosAddCircle size={25} />
            </button>
          </a>
        </Link>
      </div>

      <div className=" flex-around hover:w-1/4 group">
        <a
          href="#"
          className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-1/5 text-black"
        >
          <input
            type="search"
            name="search"
            placeholder="Recherche"
            className="hidden group-hover:inline-block rounded-2xl z-10 ml-3 align-bottom p-1 pl-4 md:w-15"
          />
          <VscSearch size={25} className="text-2xl pt-1 group-hover:hidden" />
        </a>
      </div>

      <div className="mr-6 md:mr-0">
        {status === "unauthenticated" && (
          <Link href="/signup">
            <a className="sm:text-xs inline-block text-xs px-4 py-2 text-center leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-800 hover:bg-white">
              Créer un compte
            </a>
          </Link>
        )}
      </div>

      <div className="flex flex-row sm:text-xs p-2 px-4 text-xs leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-800 hover:bg-white">
        <span className="mx-2">
          <AiOutlineLogin size={25} />
        </span>
        {status === "unauthenticated" && (
          <button className="text-sm md text-lg:lg" onClick={() => signIn()}>
            Connexion
          </button>
        )}
        {status === "authenticated" && (
          <button className="text-sm md text-lg:lg" onClick={() => signOut()}>
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
