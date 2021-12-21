import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import Image from "next/image";
import LogoSansBlabla from ".../public/Img/LogoSansBlabla.png";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row items-center p-0 justify-between shadow-xs bg-third">
      <Image src={LogoSansBlabla} alt="Logo" width="s0px" height="50px" />
      <div className="text-black flex items-center m-2 md:flex">
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
        <Link href="/Connexion"> Connexion</Link>
        <a href="#" className="pl-2">
          <AiOutlineLogin size={28} />
        </a>
      </div>
    </div>
  );
}
