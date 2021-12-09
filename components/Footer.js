import next from "next";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <h1 className="bg-gray-400">Footer</h1>
            <li className="">
                <Link href="/">
                <a className="">
                    Accueil
                </a>    
            </Link>
            </li>
            <li>
                <link href="/contact">
                    <a className="">
                        Nous contacter
                    </a>
                </link>
            </li>
            <li className="">
            <Link href="/catalog">
                <a className="">
                    Catalogue
                </a>
            </Link>
            </li>
            <li className="">
            <Link href="/about">
                <a className="">
                    Qui sommes nous
                </a>
            </Link>
            </li>
            <li className="">
            <Link href="/legal">
                <a className="">
                    Mentions légales
                </a>
            </Link>
            </li>
            <li className="">
            <Link href="/cgv">
                <a className="">
                    Conditions Générales de vente
                </a>
            </Link>
            </li>
        </div>
    )
}