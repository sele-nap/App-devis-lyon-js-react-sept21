import next from "next";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer absolute bottom-0 left-0 w-full bg-third h-20 flex list-none justify-between items-center">
            <li className="">
                <Link href="./">
                <a className="mx-2">
                    Accueil
                </a>    
            </Link>
            </li>
            <li className="">
                <Link href="./contact">
                    <a className="mx-2 my-12">
                        Nous contacter
                    </a>
                </Link>
            </li>
            <li className="">
            <Link href="./catalog">
                <a className="mx-2">
                    Catalogue
                </a>
            </Link>
            </li>
            <li className="">
            <Link href="./about">
                <a className="mx-2">
                    Qui sommes nous
                </a>
            </Link>
            </li>
            <li className="">
            <Link href="./legal">
                <a className="mx-2">
                    Mentions légales
                </a>
            </Link>
            </li>
            <li className="">
            <Link href="./cgv">
                <a className="mx-2">
                    CGV
                </a>
            </Link>
            </li>
        </div>
    )
}