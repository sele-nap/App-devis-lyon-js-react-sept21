import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import Image from "next/image";
import LogoSansBlabla from "../public/assets/LogoSansBlabla.png";

export default function Navbar() {
  return (
    <div className="w-full flex flex-row items-center p-2 justify-between bg-white shadow-xs bg-indigo-500 ">
      <Image src={LogoSansBlabla} alt="Logo" width="100px" height="100px" />
      <div className="ml-8 text-lg text-white hidden md:flex">
        {" "}
        <Link href="/Devis">
          <a>Devis</a>
        </Link>
        <IoIosAddCircle />
      </div>
      <span className="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
      </span>

      <div className="flex flex-row-reverse text-white mr-4 ml-4 md:hidden"></div>
      <div className="flex items-center mr-8 hidden md:flex">
        <Link href="/Connexion"> Connexion</Link>
        <a href="#" className="">
          <AiOutlineLogin />
        </a>
      </div>
    </div>
  );
}
