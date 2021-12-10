import Link from "next/link";
import { AiOutlineLogin } from "react-icons";
import { IoIosAddCircle } from "react-icons";
import Image from "next/image";
import LogoSansBlabla from "../public/assets/LogoSansBlabla.png";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Image src={LogoSansBlabla} alt="Logo" width="100px" height="100px" />
        </li>
        <li>
          <Link href="/Devis">
            <a>
              Devis <IoIosAddCircle />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Connexion">
            <a>
              Connexion <AiOutlineLogin />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
