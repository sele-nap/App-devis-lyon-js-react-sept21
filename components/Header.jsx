import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
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
        title: "Vous devez ếtre identifier pour pouvoir demander un devis",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
  return (
    <div className=" w-full flex flex-col items-center p-0 justify-between shadow-xs bg-third sm:flex-row">
      <Link href="/" passHref>
        <a className="flex justify-center md:justify-end ">
          <Image src={LogoSansBlabla} alt="Logo" width="50px" height="50px" />
        </a>
      </Link>

      <div className="text-black flex flex-row items-center m-2 md:flex">
        {" "}
        <Link href="/askEstimatePage">
          <a className="">
            {" "}
            <button onClick={handleEstimateClick}>
              {" "}
              Devis <IoIosAddCircle size={28} />
            </button>
          </a>
        </Link>
      </div>
      <span className="w-full md:w-1/ sm:w-1/6 h-10 cursor-pointer border border-gray-300  text-sm rounded-full flex  justify-center ">
        <input
          type="search"
          name="serch"
          placeholder="Recherche"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
      </span>
      <div className="cursor-pointer">
        <Link href="/signup"> Inscription</Link>
      </div>

      <div className="flex flex-row-reverse text-black mr-4 ml-4 cursor-pointer"></div>
      <div className="flex items-center m-2 md:flex">
        <a href="/#" className="pl-2">
          <AiOutlineLogin size={28} />
        </a>
        {status === "unauthenticated" && (
          <button onClick={() => signIn()}>Connexion</button>
        )}
        {status === "authenticated" && (
          <button onClick={() => signOut()}>Déconnexion</button>
        )}
      </div>
    </div>
  );
};

export default Header;
