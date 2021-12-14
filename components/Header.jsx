import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import Image from "next/image";
import LogoSansBlabla from "../public/Img/LogoSansBlabla.png";

const Header = () => {
  const { data, status } = useSession();
  return (
    <div className="w-full flex flex-row items-center p-0 justify-between shadow-xs bg-third">
      <Image src={LogoSansBlabla} alt="Logo" width="50px" height="50px" />
      <div className="text-black flex items-center m-2 md:flex">
        {" "}
        <Link href="/Devis">
          <a>Devis</a>
        </Link>
        <a href="#" className="pl-2">
          <IoIosAddCircle size={28} />
        </a>
      </div>
      <span className="w-full md:w-1/ sm:w-1/6 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Recherche"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
      </span>

      <div className="flex flex-row-reverse text-black mr-4 ml-4 md:hidden"></div>
      <div className="flex items-center m-2 md:flex">
        <a href="#" className="pl-2">
          <AiOutlineLogin size={28} />
        </a>
        {status === "unauthenticated" && (
          <button
            className="bg-yellow-100 p-2 rounded-xl"
            onClick={() => signIn()}
          >
            Se connecter
          </button>
        )}
        {status === "authenticated" && (
          <button
            className="bg-yellow-100 p-2 rounded-xl"
            onClick={() => signOut()}
          >
            Se déconnecter
          </button>
        )}
      </div>
    </div>
  );
};
