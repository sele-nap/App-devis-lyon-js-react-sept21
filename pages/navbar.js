import Link from "next/link";
import { AiOutlineLogin } from "react-icons";
import { IoIosAddCircle } from "react-icons";
import Image from "next/image";
import LogoSansBlabla from "./assets/LogoSansBlabla.png";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <Image src={LogoSansBlabla} alt="Logo" layout="responsive" />
          </Link>
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
